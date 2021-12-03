
let express = require('express');
const ProjectController = require('../controller/projectcontroller.ts');
const router = express.Router();
var cors = require('cors')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();
const auth = require("../auth/adminauth.ts");



router.post("/create/createproject", urlencodedParser, ProjectController.createProject);
router.get("/fetch/fetchprojects", urlencodedParser, ProjectController.fetchProject);
router.put("/update/updateproject", urlencodedParser, ProjectController.updateProject);
router.delete("/delete/deleteproject", urlencodedParser, ProjectController.deleteProject);
router.get("/filter/filterproject", urlencodedParser, ProjectController.filterProject);



router.get('/types/projecttypes', urlencodedParser, ProjectController.projectTypes);
router.post('/types/insertprojecttypes', urlencodedParser, auth.isAdmin, ProjectController.insertProjectType);
router.put('/types/updateprojecttypes', urlencodedParser, auth.isAdmin, ProjectController.editProjectType)

module.exports = router;