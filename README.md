# Quizo

- Quizzo is an application using which log in one can upload quize question with their options and answers with start date and end date as well as get active quizzes and get answers of particular quize after the quiz ends



# Tech-Stacks:
- Node.js
- Express.js
- Mongodb
- Jsonweb token
- bcrypt
- Postman
- express-rate-limit
- crone


# Deployed Link
[http://65.0.106.33:3502](http://65.0.106.33:3502)

# Quizzo backend repo link
[https://github.com/AakashGaurab/Quizo](https://github.com/AakashGaurab/Quizo)

# Entities
User
- id(Primary key)
- name
- email(unique)
- password(hashed)

# quiz
- id(primary key)
- question {String}
- options [String]
- rightAnswer Number
- startDate String new Date()
- endDate String new Date()

# Routes
User Routes
Registration
POST /user/signup
```
{
"name":"Aakash",
"email":"aakash@gmail.com",
"password":"1234"
}
```
 Response: {"msg":"Signup Succesful"}
   alternate responses {"msg":"Problem Encrypting password"}
                  
Login
POST /user/login
```
              Request:{
                  "email":example@gmail.com,
                  "password":"example123"
              }
```
  Response:{
  {msg:"Login Succesfull",token:"JWT token"}
  }

Quiz Routes
# upload a file
POST /quizzes/
headers token (jwtToken)
```
{
    "qestion":"Highest Mountain of the World",
    "options":["Mt AnduBandu","Mt Machapuchre","Mt Everest","Mt Kanchanjanga"],
    "rightAnswer":2,
    "startDate":"2023-12-19T11:53:37.531Z",
    "endDate":"2023-12-20T00:00:00.000Z"
}

```


# Get active quizzes
GET /quizzes/active
header token:{jwtToken from login}

Response {
    ```
    {
    "_id": "658185cc40a14924919221ae",
    "question": "Highest Mountain of the World",
    "options": [
        "Mt AnduBandu",
        "Mt Machapuchre",
        "Mt Everest",
        "Mt Kanchanjanga"
    ],
    "rightAnswer": 2,
    "startDate": "2023-12-19T11:53:37.531Z",
    "endDate": "2023-12-20T00:00:00.000Z",
    "__v": 0
   }
   ```
}


# Get result of quizzes
GET /quizzes/:id/result
header token:{jwtToken from login}


# Get all quizzes

GET /quizzes/all
header token:{jwtToken from login}


response {
    ```
    
    {
    "_id": "658185cc40a14924919221ae",
    "question": "Highest Mountain of the World",
    "options": [
        "Mt AnduBandu",
        "Mt Machapuchre",
        "Mt Everest",
        "Mt Kanchanjanga"
    ],
    "rightAnswer": 2,
    "startDate": "2023-12-19T11:53:37.531Z",
    "endDate": "2023-12-20T00:00:00.000Z",
    "__v": 0
    }
    ```
}
