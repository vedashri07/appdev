const expressdemo = require("express");
const mongoose = require('mongoose');
const bodypparser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");



var cors = require('cors');
var customer = require('./routes/customer.ts');
var project = require('./routes/projectroute.ts');
var donate = require('./routes/donateroute.ts');
var admin = require('./routes/adminroute.ts');

const app = expressdemo();
const PORT = 7000;
app.use(
    session(
        {
            resave: true,
            secret: '123456',
            saveUninitialized: true

        }
    )
);

app.use(cors());
app.use(bodypparser.json())
app.use(bodypparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(customer);
app.use(project);
app.use(donate);
app.use(admin);



const SERVER_URI = 'mongodb://27017/demo?retryWrites=true&w=majority'
const URI = 'mongodb://127.0.0.1:27017/demo';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log("database connection successfully");
}).catch(err => {
    console.log("error at mongodb" + err);
});



app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});