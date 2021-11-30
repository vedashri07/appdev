
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
    const role = req.body.role;
    bcrypt.genSalt(10, function (err, Salt) {

        //encrypting password
        bcrypt.hash(password, Salt, function (err, hash) {

            if (err) {
                return console.log('CANNOT ENCRYPT');
            }
            const Customer = new CustomerModel(
                {
                    name: name,
                    email_id: email_id,
                    mobile_no: mobile_no,
                    password: hash,
                    role: role,
                    createdOn: new Date()
                });
            console.log(Customer);


            CustomerModel.find({ email_id: email_id, isDeleted: false }, function (err, user) {
                if (user.length > 0) {

                    res.json({ message: "User already exists " })
                }
                else {
                    Customer
                        .save().then(result => {


                            var token = jwttoken.sign({ id: user._id }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })




                            res.status(200).send({ id: user._id, auth: true, token: token });


                        })
                        .catch(err => {
                            console.log(err.message);
                        })
                }
            });
        })

    })







}





//for login
exports.postLogin = (req, res, next) => {
    var session = req.session;

    const email_id = req.body.email_id;

    CustomerModel.find({ email_id: email_id, isDeleted: false })
        .then(result => {
            for (var key in result) {
                if (result.hasOwnProperty(key)) {
                    var password = result[key].password;
                    var user_id = result[key].id;
                }
            }
            bcrypt.compare(req.body.password, password, function (err, user) {

                if (user) {

                    var token = jwttoken.sign({ userid: user_id }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })

                    res.send({ message: "Login Succesful", auth: true, token: token });
                }
                else {
                    res.json({ success: false, message: 'passwords do not match' });

                }

            })


        })
        .catch(function (error) {
            console.log(error);
            res.send("not able to update");
        });


    {  /* CustomerModel.find({ email_id: email_id, isDeleted: false }, function (err, user) {
        console.log(JSON.parse(user));
        
        console.log(bcrypt.compare(user.password, req.body.password));
        bcrypt.compare(req.body.password, user.password, function (err, res) {
            if (req.body.password != user.password) {
                res.json({ success: false, message: 'passwords do not match' });
            } else {
                var token = jwttoken.sign({ id: user._id }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })


                res.status(200).send({ message: "Login Succesful", auth: true, token: token });
            }
        });
    })  */}
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
    bcrypt.genSalt(10, function (err, Salt) {

        //encrypting password
        bcrypt.hash(password, Salt, function (err, hash) {

            if (err) {
                return console.log('CANNOT ENCRYPT');

            }
            CustomerModel.findOneAndUpdate(
                { name: req.body.name, email_id: req.body.email_id, mobile_no: req.body.mobile_no },
                { "$set": { password: hash } },
                { new: true },

                function (err, user) {
                    if (err) { res.send(err) }
                    else { res.send("Password successfully Updated") }
                }
            )

        })
    })





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



