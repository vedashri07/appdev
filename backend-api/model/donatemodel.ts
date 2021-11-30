
var mongooseschema = require('mongoose');

const schema = mongooseschema.Schema;
const DonateSchema = new schema({
    userid:{
        type:String,
        require:true
    },
    paymentType: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    
    lastName: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    email_id: {
        type: String,
        require: true
    },
    personalMessage: {
        type: String,
        required: false
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

module.exports = mongooseschema.model('Donate', DonateSchema)