# Express.js CRUD API

This project is a simple **CRUD API** built using **Express.js**. It manages a list of users stored in memory, allowing clients to create, read, update, and delete user records. Each user is identified by a unique ID generated using the **UUID** library.

## Features

- **GET** `/users` - Retrieve a list of all users.
- **POST** `/users` - Add a new user with automatically generated unique ID.
- **GET** `/users/:id` - Retrieve details of a specific user by their unique ID.
- **DELETE** `/users/:id` - Remove a specific user by their unique ID.
- **PATCH** `/users/:id` - Update a specific user's details by their unique ID.

## Project Structure

```

/project-directory
|-- /controllers
| |-- users.js # Handles business logic for user operations.
|
|-- /routes
| |-- users.js # Defines routes for user-related endpoints.
|
|-- index.js # Main server entry point.

```

### File Breakdown

1. **index.js**

   - Configures the Express app and sets up middleware (like `body-parser`).
   - Defines the base `/users` endpoint and integrates routes.
   - Starts the server on a specified port (default: 5000).

2. **routes/users.js**

   - Defines RESTful routes for user-related operations.
   - Routes requests to the appropriate controller functions.

3. **controllers/users.js**
   - Implements the logic for CRUD operations:
     - Adding users to memory with unique IDs.
     - Retrieving user data by ID.
     - Deleting and updating user information.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

### 1. **Retrieve All Users**

- **Method**: `GET`
- **Endpoint**: `/users`
- **Description**: Fetch a list of all users.
- **Example Response**:
  ```json
  []
  ```

### 2. **Add a New User**

- **Method**: `POST`
- **Endpoint**: `/users`
- **Description**: Add a new user to the database.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "age": 30
  }
  ```
- **Example Response**:
  ```json
  {
    "message": "User with the name John Doe added to the database!"
  }
  ```

### 3. **Retrieve a User by ID**

- **Method**: `GET`
- **Endpoint**: `/users/:id`
- **Description**: Fetch a user by their unique ID.
- **Example Response**:
  ```json
  {
    "id": "1234",
    "name": "John Doe",
    "age": 30
  }
  ```

### 4. **Delete a User**

- **Method**: `DELETE`
- **Endpoint**: `/users/:id`
- **Description**: Remove a user from the database by their ID.
- **Example Response**:
  ```json
  {
    "message": "User with the id 1234 deleted from the database."
  }
  ```

### 5. **Update a User**

- **Method**: `PATCH`
- **Endpoint**: `/users/:id`
- **Description**: Update user details like `name` or `age`.
- **Request Body** (example):
  ```json
  {
    "name": "Jane Doe"
  }
  ```
- **Example Response**:
  ```json
  {
    "message": "User with the id 1234 has been updated."
  }
  ```

## Tools and Technologies Used

- **Express.js**: Web framework for building the API.
- **UUID**: For generating unique user IDs.
- **Body-parser**: To parse incoming JSON requests.

## Running the Project

1. **Start the server**:

   ```bash
   npm start
   ```

2. Use a tool like **Postman** or **cURL** to interact with the endpoints.

## Future Enhancements

- Persist user data in a database (e.g., MongoDB, PostgreSQL).
- Add input validation and error handling.
- Implement user authentication and authorization.


````
