const LoginModel = require('../model/loginmodel');

//for login
exports.postLogin = (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const password = req.body.password;
    LoginModel.find({ name: name, password: password, isDeleted: false }, function (err, user) {
        if (user.length > 0) {

            res.json({ message: "Login successfully", status: true })
        }
        else {
            res.json("user not found")
        }
    });
}






