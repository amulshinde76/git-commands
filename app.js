

const express = require('express');

const app = express()

const start = async () => {

    try {

        await mongoose.connect();

        app.listen(5000, () => console.log('server is running on port 5000...'))

    } catch (error) {
        console.log(error)
    }
}


start();

