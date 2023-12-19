const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 3502 ;
const cors = require("cors");
const {connect} = require("./config/db");  // Database importing for connection

const {user} = require("./routes/user");

app.use(cors({origin:"*"}));
app.use(express.json());




app.use("/user",user);





app.listen(port,async()=>{
    try {
        await connect;  // connecting to db;
        console.log("Connected to db");
    } catch (error) {
       console.log(error); 
    }

    console.log(`Server running at http://localhost:${port}`)
})
