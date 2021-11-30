
let express = require('express');
const AdminController = require('../controller/admincontroller.ts');
const router = express.Router();
var cors = require('cors')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();
const auth = require("../auth/adminauth.ts");



router.post("/admin/login", urlencodedParser, auth.isAdmin, AdminController.adminLogin);
router.get("/admin/users", urlencodedParser, auth.isAdmin, AdminController.getAll);
router.post("/admin/createuser", urlencodedParser, auth.isAdmin, AdminController.createUser);
router.put("/admin/updateuser", urlencodedParser, auth.isAdmin, AdminController.userUpdate);
router.delete("/admin/deleteuser", urlencodedParser, auth.isAdmin, AdminController.deleteUser);


module.exports = router;