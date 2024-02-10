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
     - directly code in index.js using this function style
     `(async ()=>{
      connection logic there try and catch block
     })()`
     - make file index.js in db folder using arrow function 
      ```
      const connectDB = ()=> {
        connection logic there try and catch block

      }
      ```
     

- *dont connect the dtabase with single line of code not good way* 

- *index.js way* go to indexConnection.js file were the code like if we write logic for connection database if we put all logic their(it kind of mess) we used there

- *secand way to connected database* we created a file(index.js) inside db folder we put logic there and importing/call in index.js(root one)

### custom api response and error handling

The code snippet you provided defines an `asyncHandler` middleware function in JavaScript, commonly used with Express.js to handle asynchronous route handlers. However, the code seems to have a small issue in error handling.

Here's a corrected version of the code with proper error handling:

```javascript
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        });
    }
};

export { asyncHandler };
```

Here's a breakdown of the corrected code:

- `asyncHandler`: This is a higher-order function that takes a function `fn` (which is an asynchronous function) as its parameter.
- Inside `asyncHandler`, it returns an asynchronous middleware function that Express can use.
- This inner asynchronous function takes three parameters: `req` (the request object), `res` (the response object), and `next` (the next middleware function in the stack).
- Inside the inner function, `await fn(req, res, next)` is called, which executes the provided asynchronous function `fn`.
- If an error occurs during the execution of `fn`, it will be caught by the `try...catch` block.
- If an error is caught, it will set the response status to the error's code (if provided) or 500 (Internal Server Error), and it will send a JSON response with the error message.
- The corrected code uses `err` in the `catch` block instead of `error`, which matches the variable name used in the catch block.

This `asyncHandler` middleware is useful for handling errors in asynchronous route handlers in an Express.js application. It helps avoid repetitive error handling code in individual route handlers.



The `asyncHandler` function you've provided is a common pattern used in Express.js middleware to handle asynchronous route handlers. Let's break down how it works:

```javascript
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
```

1. **asyncHandler Function**: It's a higher-order function that takes a `requestHandler` function as its argument.

2. **Returned Function**: It returns another function, which serves as an Express.js middleware function. This middleware function takes the standard Express.js middleware parameters: `req`, `res`, and `next`.

3. **Promise.resolve()**: The `requestHandler` function is called inside `Promise.resolve()`. This ensures that the return value from `requestHandler` is always a promise.

4. **Error Handling**: The `.catch()` method is used to catch any errors that might occur during the execution of `requestHandler`. If an error occurs, it calls `next(err)` to pass the error to the Express error handling middleware.

This pattern simplifies error handling in asynchronous route handlers. Instead of manually wrapping each asynchronous route handler with a try-catch block, you can use `asyncHandler` to handle errors uniformly across your application.

*ApiRESPONE sample How it work*

```javascript
import { ApiResponse } from './ApiResponse.js';

Creating an instance of ApiResponse
const response = new ApiResponse(200, { message: 'Hello, world!' });

Accessing properties of the response
console.log(response.statusCode); // 200
console.log(response.data); // { message: 'Hello, world!' }
console.log(response.message); // 'Success'
console.log(response.success); // true
```

*ApiError sample How it work*


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

