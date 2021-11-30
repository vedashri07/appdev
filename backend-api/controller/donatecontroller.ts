const DonateModel = require('../model/donatemodel.ts');


exports.donate = (req, res, next) => {


    const donationdetails = new DonateModel({});

    Object.keys(req.body).map(function (key, index) {

        donationdetails[key] = req.body[key];
    })
    console.log(donationdetails);
}