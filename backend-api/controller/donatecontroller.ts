const DonateModel = require('../model/donatemodel.ts');


exports.donate = (req, res, next) => {

    var token = (req.body && req.body.token) || req.headers['token'];
    if (token) {

        var decoded = jwttoken.decode(token, process.env.TOKEN_SECRET);
        var userid = decoded.userid;
    }
    const Donationdetails = new DonateModel({});
    Object.keys(req.body).map(function (key, index) {

        Donationdetails[key] = req.body[key];
    })
    Donationdetails["userid"] = userid;
    Donationdetails
        .save().then(result => {

            res.status(200).send({ message: "Donated Successfully" });


        })
        .catch(err => {
            console.log(err.message);
        })

}