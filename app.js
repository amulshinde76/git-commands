

const express = require('express');
const connectDB = require('./db/connect');

const app = express()

const start = async () => {

    try {

        await connectDB(process.env.MONGO_URL);

        app.listen(5000, () => console.log('server is running on port 5000...'))

    } catch (error) {
        console.log(error)
    }
}


start();

