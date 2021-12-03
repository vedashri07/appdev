
var mongooseschema = require('mongoose');


const schema = mongooseschema.Schema;
let counter = 0;
let CountedId = { type: Number, default: () => counter++ };
const ProjectTypeSchema = new schema({

    projectType: [{
        name: String
    }],

    category: [{
        name: String
    }],

    subcategory: [{
        name: String
    }],



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

module.exports = mongooseschema.model('ProjectType', ProjectTypeSchema)