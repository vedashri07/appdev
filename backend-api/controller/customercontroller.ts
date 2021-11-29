const CustomerModel = require('../model/customermodel.ts');
const jwttoken = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.createCustomer = (req, res, next) => {

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
            createdBy: 'customer',
            usertype: 'customer',
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


                    res.status(200).send({ auth: true, token: token });


                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    });


}





//for login
exports.postLogin = (req, res, next) => {

    var hashedPassword;
    const email_id = req.body.email_id;
    CustomerModel.find({ email_id: email_id, isDeleted: false }, function (err, user) {
        bcrypt.compare(req.body.password, 'superSecret', function (err, res) {
            if (req.body.password != CustomerModel.password) {
                res.json({ success: false, message: 'passwords do not match' });
            } else {
                var token = jwttoken.sign({ id: user._id }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })


                res.status(200).send({ message: "Login Succesful", auth: true, token: token });
            }
        });
    })
}

//for update




exports.customerUpdate = (req, res) => {


    CustomerModel.updateOne({ _id: req.body.id }, req.body)
        .then(result => {
            res.send("data updated successfully");
        })
        .catch(function (error) {
            console.log(error);
            res.send("not able to update");
        });


}


//change password


exports.changePassword = (req, res) => {

    let hashedPassword = req.body.password;
    CustomerModel.findOneAndUpdate(
        { name: req.body.name, email_id: req.body.email_id, mobile_no: req.body.mobile_no },
        { "$set": { password: hashedPassword } },
        { new: true },

        function (err, user) {
            if (err) { res.send(err) }
            else { res.send("Password successfully Updated") }
        }
    )


}

//delete user

exports.deleteUser = (req, res, next) => {
    CustomerModel.findOneAndRemove({
        _id: req.body.id

    }).then(result => {
        res.send("User deleted !");

    }).catch(function (error) {
        res.send("User doesnt not exist")
    })

}



