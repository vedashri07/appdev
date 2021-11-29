
let express = require('express');
const ProjectController = require('../controller/projectcontroller.ts');
const router = express.Router();
var cors = require('cors')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();



router.post("/create/createproject", urlencodedParser, ProjectController.createProject);
router.get("/fetch/fetchprojects", urlencodedParser, ProjectController.fetchProject);
router.put("/update/updateproject", urlencodedParser, ProjectController.updateProject);
router.delete("/delete/deleteproject", urlencodedParser, ProjectController.deleteProject);


router.get("/filter/filterproject", urlencodedParser, ProjectController.filterProject);

module.exports = router;