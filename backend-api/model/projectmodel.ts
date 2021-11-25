
var mongooseschema = require('mongoose');

const schema = mongooseschema.Schema;
const ProjectSchema = new schema({
    title: {
        type: String,
        // require: true
    },
    subtitle: {
        type: String,
        //require: true
    },
    projectType: {
        type: String,
        //require: true
    },
    category: {
        type: String,
        //require: true
    },
    subCategory: {
        type: String,
        // required: true
    },
    projectImage: {
        type: [String],
        //require: true,

    },
    launchDate: {
        type: Date,
        // require: true
    },
    fixedDate: {
        type: String,
        //require: true,
    },
    specificDateAndTime: {
        type: String,
        // require: true,
    },
    goalAmount: {
        type: Number,
        // require: true,
    },
    rewards: {
        type: [String],
        //require: true,
    },
    projectDescription: {
        type: [],
        // require: true,
    },
    riskAndChallenges: {
        type: Date,
        // require: true,
    },
    projectUrl: {
        type: String,
        //require: true,
    },
    analyticsId: {
        type: String,
        //  require: true,
    },
    isDeleted: {
        type: Boolean,
        require: false,
        default: false
    },
    deletedBy: {
        type: String,
        require: false
    },
    deletedOn: {
        type: Date,
        require: false
    }

});


module.exports = mongooseschema.model('Project', ProjectSchema)