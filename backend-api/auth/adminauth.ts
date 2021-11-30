
const CustomerModel = require('../model/customermodel.ts');

exports.isAdmin = (req, res, next) => {

    console.log("in admin")

    CustomerModel.find({ email_id: req.body.email_id, isDeleted: false }, function (err, user) {

        let isAdmin;

        for (var key in user) {
            if (user.hasOwnProperty(key)) {
                if (user[key].role == 'admin') {
                    console.log(user[key].role == 'admin');
                    isAdmin = true;
                }
            }
        }
        if (isAdmin) {
            next();
        } else {
            res.status(500).send({ error: 'Access denied' })
        }
    })

}


