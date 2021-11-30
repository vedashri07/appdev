const CustomerModel = require('../model/customermodel.ts');
const jwttoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');




//for login
exports.adminLogin = (req, res, next) => {

    var hashedPassword;
    const email_id = req.body.email_id;
    CustomerModel.find({ email_id: email_id, isDeleted: false }, function (err, user) {
        bcrypt.compare(req.body.password, 'superSecret', function (err, res) {


            if (req.body.role == CustomerModel.role, req.body.password != CustomerModel.password) {
                res.json({ success: false });
            } else {
                var token = jwttoken.sign({ id: user._id }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })


                res.status(200).send({ message: "Login Succesfull", auth: true, token: token, role: 'admin' });
            }
        });
    })
}
exports.createUser = (req, res, next) => {

    var hashedPassword;
    const name = req.body.name;
    const email_id = req.body.email_id;
    const mobile_no = req.body.mobile_no;
    const password = req.body.password;
    bcrypt.genSalt(10, function (err, Salt) {

        //encrypting password
        bcrypt.hash(password, Salt, function (err, hash) {

            if (err) {
                return console.log('CANNOT ENCRYPT');
            }
            hashedPassword = hash;

        })
    })
    const Customer = new CustomerModel(
        {
            name: name,
            email_id: email_id,
            mobile_no: mobile_no,
            password: hashedPassword,
            role: 'user',
            createdOn: new Date()
        });

    CustomerModel.find({ email_id: email_id, isDeleted: false }, function (err, user) {
        if (user.length > 0) {

            res.json({ message: "User already exists " })
        }
        else {
            Customer
                .save().then(result => {
                    console.log(result);

                    var token = jwttoken.sign({ id: user._id }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })


                    res.status(200).send({ auth: true, token: token, message: 'User created by Good works' });


                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    });


}







//for update




exports.userUpdate = (req, res) => {


    CustomerModel.updateOne({ email_id: req.post.email_id, role: 'user' }, req.body)
        .then(result => {
            res.send("Good works updated user");
        })
        .catch(function (error) {
            console.log(error);
            res.send("not able to update");
        });


}




//delete user

exports.deleteUser = (req, res, next) => {
    CustomerModel.findOneAndRemove({
        email_id: req.post.email_id, role: 'user'

    }).then(result => {
        res.send("Good works deleted user");

    }).catch(function (error) {
        res.send("User doesnt not exist")
    })

}

exports.getAll = (re, res, next) => {



    CustomerModel.find({})
        .then(result => {
            const { password, ...userWithoutPassword } = result;
            res.send(userWithoutPassword);
        })
        .catch(function (error) {
            console.log(error);
            res.send("not able to fetch");
        });


}

