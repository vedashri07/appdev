let express = require('express');
const DonateController = require('../controller/donatecontroller.ts');
const router = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();
const validator = require("../validation/validator.ts");


router.post("/donate/donation", urlencodedParser, validator.donate, DonateController.donate);

module.exports = router;