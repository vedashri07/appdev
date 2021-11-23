const router = express.Router();
var cors = require('cors')
const LoginController = require('../controller/logincontroller');

router.post('/login/postLogin', LoginController.postLogin);


module.exports = router;