const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//MIDDLEWARES
app.use(express.static('./public'));
app.use(express.json());

//ROUTES
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000 

//CONNECT DB AND RUN SERVER
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server Listening to Port ${port}....`)
        })
    }
    catch(err){
        console.log(err)
    }
}

start();

