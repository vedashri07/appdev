const expressdemo = require("express");
const mongoose = require('mongoose');
const bodypparser = require('body-parser');


var cors = require('cors');
var customer = require('./routes/customer.ts')

const app = expressdemo();
const PORT = 7000;
app.use(cors());
app.use(bodypparser.json())
app.use(bodypparser.urlencoded({ extended: true }));
var customer = require('./routes/customer.ts')

app.use(customer);



const SERVER_URI = 'mongodb://27017/demo?retryWrites=true&w=majority'
const URI = 'mongodb://127.0.0.1:27017/demo';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log("database connection successfully");
}).catch(err => {
    console.log("error at momgodb" + err);
});



app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});