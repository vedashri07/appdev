const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var login = require('./routes/login')
var cors = require('cors');


const app = express();
const PORT = 7000;
app.use(cors())




const SERVER_URI = 'mongodb://27017/demo?retryWrites=true&w=majority'
const URI = 'mongodb://127.0.0.1:27017/demo';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log("database connection successfully");
}).catch(error => {
    console.log("error at momgodb" + error);
});








// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});