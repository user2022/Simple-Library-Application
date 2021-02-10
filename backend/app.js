const express = require('express'); // Node JS framework
const morgan = require('morgan'); // API Debugging tool
const bodyParser = require('body-parser'); // Parses requests
const mongoose = require('mongoose'); // for MongoDB
const cors = require('cors'); // Enable cross-origin resource sharing for API

const {myDB} = require("./db"); // I just put this in a separate file since it contains my DB username and password


const app = express(); // Initializing my express server

// Connecting my application to MongoDB
mongoose.connect(myDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database');
    }
});

// Enabling the middleware's on my express server
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes // Adding my route methods to my express server app
app.use('/api', require('./routes/book'));
app.use('/api', require('./routes/author'));

// Setting up server and port
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port ' + 3000);
    }
});


