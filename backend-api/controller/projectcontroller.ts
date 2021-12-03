const ProjectModel = require('../model/projectmodel.ts');
const ProjectTypeModel = require('../model/projecttypemodel.ts');
const jwttoken = require('jsonwebtoken');

const { body, validationResult } = require('express-validator');

exports.createProject = (req, res, next) => {

    var upload;
    var token = (req.body && req.body.token) || req.headers['token'];
    if (token) {

        var decoded = jwttoken.decode(token, process.env.TOKEN_SECRET);
        var userid = decoded.userid;
    }
    if (req.body.step === '') {

        for (var i = 1; i <= Object.values(req.body).length; i++) {
            if (Object.keys(req.body)[i] !== 'step' && Object.values(req.body)[i] === '') {

                upload = false;
                break;
            }
            else {
                upload = true;
            }
        }
        if (upload) {
            const details = {
                title: "",
                subtitle: "",
                projectType: "",
                category: "",
                subCategory: "",
                projectImage: "",
                launchDate: "",
                fixedDate: "",
                specificDateAndTime: "",
                goalAmount: "",
                rewards: "",
                projectDescription: "",
                riskAndChallenges: "",
                projectUrl: "",
                analyticsId: ""
            };
            const Projects = new ProjectModel({});
            Object.keys(details).map(function (key, index) {
                Projects[key] = req.body[key]
            });
            Projects["userid"] = userid;
            Projects.save().then(result => {
                res.send(result);
            })

        }
        else {
            res.send("Some field values missing")
        }


    }

    else {
        switch (req.body.step) {
            case "1":
                var Step1 = {
                    title: "",
                    subtitle: "",
                    projectType: "",
                    category: "",
                    subCategory: "",
                    projectImage: "",
                    launchDate: "",
                    fixedDate: "",
                    specificDateAndTime: "",
                }
                const Projects = new ProjectModel({});
                Object.keys(Step1).map(function (key, index) {
                    Projects[key] = req.body[key]
                });
                ProjectModel.findOne({ _id: req.body.id }, (err, project) => {

                    Projects.save().then(result => {
                        res.send("Data inserted succesfully");
                    })
                });

                break;

            case "2":


                ProjectModel.findOne({ _id: req.body.id }, (err, project) => {

                    project.goalAmount = req.body.goalAmount;
                    project.save().then(result => {
                        res.send("Data inserted succesfully");
                    })

                });
                break;

            case "3":

                ProjectModel.findOne({ _id: req.body.id }, (err, project) => {

                    project.rewards = req.body.rewards;
                    project.save().then(result => {
                        res.send("Data inserted succesfully");
                    })
                });

                break;



            case "4":

                ProjectModel.findOne({ _id: req.body.id }, (err, project) => {

                    project.projectDescription = req.body.projectDescription;
                    project.riskAndChallenges = req.body.riskAndChallenges;

                    project.save().then(result => {
                        res.send("Data inserted succesfully");
                    })
                });

                break;


            case "5":

                ProjectModel.findOne({ _id: req.body.id }, (err, project) => {

                    project.projectUrl = req.body.projectUrl;
                    project.analyticsId = req.body.analyticsId;

                    project.save().then(result => {
                        res.send("Data inserted succesfully");
                    })
                });

                break;



        }


    }
}



exports.fetchProject = (req, res, next) => {
    const options = {
        limit: 10,
        page: 1,
    };

    ProjectModel.paginate({ options }).then(result => {
        res.send({
            totalItems: result.totalDocs,
            tutorials: result.docs,
            totalPages: result.totalPages,
            currentPage: result.page - 1,
        });
    });

    {/*ProjectModel.find({})(function (err, result) {
        if (err) {

            res.send("unable to fetch projects")
        }
        else {
            var projects = result.toArray();
            res.send(projects);
        }
    })*/}
}


exports.updateProject = (req, res, next) => {

    ProjectModel.updateOne({ _id: req.body.id }, req.body)
        .then(result => {
            res.send("data updated successfully");
        })
        .catch(function (error) {
            console.log(error);
            res.send("not able to update");
        });
}

exports.deleteProject = (req, res, next) => {
    ProjectModel.findOneAndRemove({
        _id: req.body.id

    }).then(result => {
        res.send("User deleted !");

    }).catch(function (error) {
        res.send("User doesnt not exist")
    })

}


exports.filterProject = (req, res, next) => {

    const title = req.body.title;
    ProjectModel.find({ title: { $regex: '.*' + title + '.*' } }).then((result) => {

        res.send(result);

    })
        .catch(err => {
            res.send(err);
        })

}


exports.projectTypes = (req, res, next) => {

    ProjectTypeModel.find({}).then((result) => {

        res.send(result);
        console.log(result);

    })
        .catch(err => {
            res.send(err);
        })

}

exports.editProjectType = (req, res, next) => {
    var id = req.body._id;
    var toupdate = req.body.toupdate;
    var updatefield = req.body.updatefield;
    var updateValue = req.body.updateValue;
    var condition1 = `${updatefield}._id`
    var condition = `${updatefield}.$.name`;
    console.log(
        ProjectTypeModel.update(

            { [condition1]: id },
            { $set: { [condition]: updateValue } })
    );
    ProjectTypeModel.updateOne(

        { [condition1]: id },
        { $set: { [condition]: updateValue } })


        .then((result) => {

            res.send(result);
            console.log(result);

        })
        .catch(err => {
            res.send(err);
        })



}

exports.insertProjectType = (req, res, next) => {


    const Types = new ProjectTypeModel({

        projectType: [{ name: req.body.projectType }],
        category: [{ name: req.body.category }],
        subcategory: [{ name: req.body.subcategory }]

    })


    Types.save().then(result => {
        res.send(result);
        console.log(result);
    }).catch(err => {
        console.log(err.message);
    })



}