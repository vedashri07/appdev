
let express = require('express');
const CustomerController = require('../controller/customercontroller.ts');
const router = express.Router();
var cors = require('cors')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();
const validator = require("../validation/validator.ts");



router.post("/create/user", urlencodedParser, validator.createUser, CustomerController.createCustomer);
router.post("/login/postlogin", urlencodedParser, validator.resultsValidator, validator.login, CustomerController.postLogin);
router.put("/update/userupdate", urlencodedParser, validator.resultsValidator, validator.updateUser, CustomerController.customerUpdate);
router.post("/password/changepassword", urlencodedParser, CustomerController.changePassword);
router.delete("/delete/deleteuser", urlencodedParser, CustomerController.deleteUser);


module.exports = router;