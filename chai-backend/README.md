### How to setup a professional backend project?
   
   - npx init
   - create folder Public/temp -> .gitKeep
   - create .gitignore file, Readme.md
   - craete Folder src and inside we add up file like app.js, constant.js, index.js
   - we what i do import way not required to import so,

    `inside package.json "type":"module" above "main"`

   - inside src folder create folder db, utils, models, controllers, middlewares, routes
   - install package like nodemon(devdependance) and prettier(devdependance)
   - than creat two file .prettierrc(configuration) and .prettierignore(ignore)

   `{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}`

    ```
    /.vscode
    /node_modules
    ./dist

    *.env
    .env
    .env.*
    ```


  - create .env file  

 [data model](https://stackblitz.com/edit/stackblitz-starters-nm5a3j?file=models%2Ftodos%2Fsub_todo.models.js)


### How to connect database in MERN with debugging

- create account mongodb-atlas free one
    - database(username, password)
    - network access -0.0.0.0/0 

```
.env
PORT=8000
MONGODB_URI= string from mongodb atlts for connection
```  

- in constant.js
  ` export const DB_NAME = "videotube" `

- insall mongoose and exprees

- Two way to connect with database
     - directly code in index.js
     - make file db.js in db folder

- *dont connect the dtabase with single line of code not good way* 

- *index.js way*



### custom api response and error handling

### user and video model with hooks and Jwt

### How to upload file in backend

### HTTP crash course/ http methods/http header















### complete guide for router and controller with debugging

### Logical building / Register Controller

### How to use postman for backend

### Access Refresh Token, middleware and cookies in

### Accees Token and refresh tokenin backend

### writing update controllers for user/ backend with js

### understand the subscription

### Learn mongodb aggregation pipeline

### How to write sub pipeline and routes

