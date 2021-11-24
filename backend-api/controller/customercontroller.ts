const CustomerModel = require('../model/customermodel.ts');
const sha256 = require('sha256');
const jwttoken = require('jsonwebtoken');
const { validationResult } = require('express-validator');


exports.createCustomer = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    else {
        const name = req.body.name;
        const email_id = req.body.email_id;
        const mobile_no = req.body.mobile_no;
        const password = sha256(req.body.password);

        const Customer = new CustomerModel(
            {
                name: name,
                email_id: email_id,
                mobile_no: mobile_no,
                password: password,
                createdBy: 'customer',
                usertype: 'customer',
                createdOn: new Date()
            });

        CustomerModel.find({ name: name, email_id: email_id, isDeleted: false }, function (err, user) {
            if (user.length > 0) {

                res.json({ message: "User already exists " })
            }
            else {
                Customer
                    .save().then(result => {
                        console.log(result);

                        var token = jwttoken.sign({ name: name }, "" + process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })


                        res.status(200).send({ auth: true, token: token });


                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            }
        });


    }

}



//for login
exports.postLogin = (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const password = sha256(req.body.password);
    CustomerModel.find({ name: name, password: password, isDeleted: false }, function (err, user) {
        if (user.length > 0) {

            res.json({ message: "Login successfully", status: true })
        }
        else {
            res.json("user not found")
        }
    });
}

//for update




exports.customerUpdate = (req, res) => {


    CustomerModel.findOne({ _id: req.body.id }, (err, customer) => {

        customer.name = req.body.name;
        customer.email_id = req.body.email_id;
        customer.mobile_no = req.body.mobile_no;
        customer.save.then(result => {
            console.log("Update successfully");
        });

    })

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

exports.deleteUser = (req, res) => {
    CustomerModel.findOneAndRemove({
        name: req.body.name, email: req.body.email_id

    }).then(result => {
        console.log("User deleted !");

    })

}
