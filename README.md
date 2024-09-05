# Task Manager API

This is a simple Node.js web application for managing tasks. The application allows you to add, remove, update tasks, and mark them as completed.

## Features

- Add a new task
- Delete an existing task
- Update a task's details
- Mark a task as completed
- Get a list of all tasks

## Prerequisites

- Node.js (version 12 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)

## Installation

- Step 1: Clone the repository
```bash
git clone https://github.com/abdulnafih27/TaskManagerApp.git
```

- Navigate into the project directory
```bash
cd TaskManagerApp
```

- Step 2: Install Dependencies
```bash
npm install
```

- Step 3: Create a .env file and add the MongoDB connection string
```bash
MONGO_URI=Your_MongoDB_Connection_String 

# Note: Replace "Your_MongoDB_Connection_String" with your actual MongoDB URI.
# Example for MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority" > .env
```


- Step 4: Run the application in development mode
```bash
npm start
```

#The application will start on http://localhost:3000 (or the port you define in your configuration).

## API Endpoints
- GET /tasks - Get all tasks
- POST /tasks - Create a new task
- GET /tasks/:id - Get a task by its ID
- PATCH /tasks/:id - Update a task by its ID
- DELETE /tasks/:id - Delete a task by its ID

## Built With
- Express - Node.js framework
- MongoDB - Database for storing tasks
- Mongoose - MongoDB object modeling for Node.js
- dotenv - For managing environment variables