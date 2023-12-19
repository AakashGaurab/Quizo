const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 3502 ;
const cors = require("cors");
const {connect} = require("./config/db");  // Database importing for connection
const rateLimit = require('express-rate-limit'); // importing rate limiter
const cron = require('node-cron');

const {user} = require("./routes/user");
const {quiz} = require("./routes/quiz");
const {auth} = require("./middleware/authentication");
const {Quiz} = require("./models/quiz_model");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max requests per IP
});


cron.schedule('* * * * *', async () => {
    const now = new Date();
    await Quiz.updateMany({ endDate: { $lt: now } }, { $set: { status: 'finished' } });
});

app.use(cors({origin:"*"}));
app.use(express.json());




app.use("/user",user);

app.use('/quizzes', limiter);      // using rate limiter for quizzes routes
app.use("/quizzes",auth,quiz)




app.listen(port,async()=>{
    try {
        await connect;  // connecting to db;
        console.log("Connected to db");
    } catch (error) {
       console.log(error); 
    }

    console.log(`Server running at http://localhost:${port}`)
})
