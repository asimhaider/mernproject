const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

dotenv.config({path: './config.env' });

const DB = process.env.DATABASE

mongoose.connect(DB, {
    'useNewUrlParser': true,
}).then(() => {
    console.log(`Succesfully connected to MongoDB`);
}).catch((error) => console.log(error))

const middleware = (req, res, next) => {
    console.log("Hello this is middleware")
    next();
}

app.get('/', (req, res) => {
    res.send(`Welcome to MERN Project`)
});
app.get('/about', middleware, (req, res) => {
    console.log("Hello")
    res.send(`I am a MERN Developer`)
});
app.get('/contact', (req, res) => {
    res.send(`Email me at asim@gmail.com`)
});

app.listen(3000, () => {
    console.log(`Server is Running at PORT 3000`)
})


