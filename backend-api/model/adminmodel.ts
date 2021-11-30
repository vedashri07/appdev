

var mongooseschema = require('mongoose');

const Schema = mongooseschema.Schema;
const AdminSchema = new Schema({
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
    },
    role: { 
        type: String, 
        enum: ['admin','user'], 
        required: true 
    },


});


module.exports = mongooseschema.model('Admin', AdminSchema)