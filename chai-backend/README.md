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

```javascript
import { ApiError } from './ApiError.js';

// Example function that might throw an ApiError
function fetchDataFromAPI() {
    // Simulating an error condition
    const statusCode = 404;
    const message = 'Data not found';
    const errors = ['Resource not available'];

    // Throwing an instance of ApiError
    throw new ApiError(statusCode, message, errors);
}

// Example usage of fetchDataFromAPI function
try {
    fetchDataFromAPI();
} catch (error) {
    if (error instanceof ApiError) {
        console.error('API Error:');
        console.error('Status Code:', error.statusCode);
        console.error('Message:', error.message);
        console.error('Errors:', error.errors);
    } else {
        console.error('Unhandled error:', error);
    }
}

```


### user and video model with hooks and Jwt

- first we create modle for use and video

- `npm i mongoose-aggregate-paginate-v2`
- `npm i bcrypt`
- ` npm i jsonwebtoken`

- go to jwt.io

```
put in env fike
ACCESS_TOKEN_SECRET=long string
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=long string
REFRESH_TOKEN_EXPIRY=10d
```

- we using session and cookies both we don't store access token but we store refresg token in database

In the context of object-oriented programming, methods are functions that belong to objects. When a method is called on an object, it operates on the data contained within that object or its associated instance variables. 

In the provided code snippet, `userSchema.methods.generateAccessToken` is a method defined within a schema object. It is intended to be called on an instance of a user object that adheres to the schema defined by Mongoose, which is an Object Document Mapper (ODM) for MongoDB and Node.js.

When you call `user.generateAccessToken()`, where `user` is an instance of the schema, the method generates an access token based on the user's data, signs it using the provided secret, and returns the generated token.

So, the method `generateAccessToken` returns the generated access token to the code that called it. Typically, you might use this method within your application's authentication or authorization logic, where you need to generate tokens for users during login or token refresh operations. The calling code can then decide how to use the generated token, such as sending it in response to a client request or storing it in a database associated with the user for future authentication purposes.



### How to upload file in backend

- cloundinary(create a account in free version)
- express-fileupload(learn it about)
- npm i multer
- npm install cloudinary
- strategy for uploading file(pdf, photo video)
    - one way we take a file through multer and upload to local server/localstorage then from local stroage we upload to cloudinary(2 way verfication)
    - second way is upload file through multer and diretly to cloudinary

### HTTP crash course/ http methods/http header






### complete guide for router and controller with debugging

### Logical building / Register Controller

- get user details from frontend(using postman)
- valiation - no empty (backend validation is better than front end)
- check if user already exists: username, email
- check for images, check for avatar
- upload them to cloudinary, avatar̥
- create user object - create entry in db
- remove passwor and refresh token field from response
- check for user creation
- return res


### How to use postman for backend
- dotenv.config({
    path:"./env"(working for me) or path:"./.env"(working for me)

})

- we not only used  body inside  raw and json only  form-data give as value, content-type and description(in our case we not used content-type) x-www-form-urlencoded(value and description)

- checkin form-data all req(fullname password, username, email, avatar, coverImage chek name spelling)
- always delete data in database and cloudinary while testing
- while testing try to find out console the req.files and req.body
- if cloudniary successful than we unlike the file from local server
  `fs.unlinkSync(localFilePath)` before return in cloudinary.js(try part)

- we can see the password and refresh token is not send to client side
- if i uncheck coverImage then error occure
`TypeError: Cannot read properties of undefined (reading '0')`
its is not front or backend problem its pure javascript 

```javascript
let coverImageLocalPath;
if(req.files && Array.isArray(req.files.coverImage)&& req.files.coverImage.length > 0){
    coverImageLocalPath = req.files.coverImage[0].path
}
```





### Access Refresh Token, middleware and cookies in


Refresh tokens and access tokens are components of the OAuth 2.0 protocol, which is a widely used authorization framework for securing access to web resources. These tokens are used to authenticate and authorize users and applications to access protected resources on behalf of the resource owner.

1. **Access Token**:
An access token is a credential that is used by a client to access protected resources on behalf of an end-user. It represents the authorization granted to the client by the resource owner. Access tokens are short-lived and have a limited lifespan, typically ranging from a few minutes to several hours.

When a user authenticates and authorizes an application to access their resources, the authorization server issues an access token to the client. The client then includes this access token in the Authorization header of its HTTP requests when accessing protected resources. The server verifies the access token and grants access if it's valid.

2. **Refresh Token**:
A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. Unlike access tokens, refresh tokens are typically not transmitted over the network during API requests. Instead, they are securely stored by the client and exchanged with the authorization server for a new access token when needed.

When an access token expires, the client can send the refresh token to the authorization server to obtain a new access token without requiring the user to re-authenticate. This helps improve security by minimizing the exposure of access tokens, as they have a shorter lifespan and can be easily revoked if compromised.

The separation of access tokens and refresh tokens enhances security and scalability in OAuth 2.0-based systems. Access tokens provide short-term access to resources, while refresh tokens enable long-term access by facilitating the renewal of access tokens without requiring repeated authentication.


- Inside login function in user controller

     - req body ---> data
     - username or email
     - find the user
     - password check
     - access and referesh token
     - send cookie



### Accees Token and refresh token in backend

### writing update controllers for user/ backend with js



### understand the subscription

### Learn mongodb aggregation pipeline

### How to write sub pipeline and routes



### Learn about cors and differcence b/w refress token and access token

[refresh token and access token](https://help.teya.com/en_IE/articles/authentication-and-authorisation/what-is-the-difference-between-refresh-and-access-tokens/642c022adb9ad47e229baba4)

