
let express = require('express');
const CustomerController = require('../controller/customercontroller.ts');
const router = express.Router();
var cors = require('cors')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();
const validator = require("../validation/validator.ts");



router.post("/create/user", urlencodedParser,validator.createUser, CustomerController.createCustomer);
router.post("/login/postlogin", urlencodedParser, CustomerController.postLogin);
router.post("/update/userupdate",urlencodedParser,CustomerController.customerUpdate);
router.post("/password/cahngepassword",urlencodedParser,CustomerController.changePassword);



module.exports = router;