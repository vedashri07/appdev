
var mongooseschema = require('mongoose');

const Schema = mongooseschema.Schema;
const CustomerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email_id: {
        type: String,
        require: true
    },
    mobile_no: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    usertype: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        require: false
    },
    createdOn: {
        type: Date,
        require: false
    },
    updatedBy: {
        type: String,
        require: false,
    },
    updatedOn: {
        type: Date,
        require: false
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


module.exports = mongooseschema.model('Customer', CustomerSchema)