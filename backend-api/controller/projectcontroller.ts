const ProjectModel = require('../model/projectmodel.ts');

const { body, validationResult } = require('express-validator');


exports.createProject = (req, res, next) => {

    var upload;
    if (req.body.step === '') {

        for (var i = 0; i <= Object.values(req.body).length; i++) {
            if (Object.values(req.body)[i] === '') {
                upload = false;
                break;

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

            Projects.save().then(result => {
                console.log(result);
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





