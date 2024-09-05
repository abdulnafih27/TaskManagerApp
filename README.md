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

### 1. Clone the repository
```bash
git clone https://github.com/abdulnafih27/TaskManagerApp.git
cd task-manager-api
2. Install Dependencies
To install all dependencies from package.json, run:

bash
Copy code
npm install
3. Create a .env File
Create a .env file in the root of your project and add the following environment variable:

MONGO_URI=Your_MongoDB_Connection_String

Replace Your_MongoDB_Connection_String with the actual connection string for your MongoDB instance. If you're using MongoDB Atlas, it might look like this:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority

4. Running the Application
To run the application in development mode, you can use:

bash
Copy code
npm run dev
The application will start on http://localhost:3000 (or the port you define in your configuration).

5. API Endpoints
GET /tasks - Get all tasks
POST /tasks - Create a new task
GET /tasks/
- Get a task by its ID
PATCH /tasks/
- Update a task by its ID
DELETE /tasks/
- Delete a task by its ID
6. Project Structure
bash
Copy code
task-manager-api/
├── config/
│   └── db.js          # MongoDB connection setup
├── controllers/
│   └── tasks.js       # Controller logic for tasks
├── models/
│   └── Task.js        # Task model (Mongoose schema)
├── routes/
│   └── tasks.js       # Task routes
├── app.js             # Main application entry
├── package.json       # Project dependencies and scripts
└── README.md          # Project README file
7. Environment Variables
The app requires the following environment variable in the .env file:

MONGO_URI - Your MongoDB connection string
8. Running Tests
To run tests, use:

bash
Copy code
npm test
9. Built With
Express - Node.js framework
MongoDB - Database for storing tasks
Mongoose - MongoDB object modeling for Node.js
dotenv - For managing environment variables