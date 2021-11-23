const Schema = mongoose.Schema;
const LoginSchema = new Schema({
    name: {
        type: String,
        // require: true
    },

    password: {
        type: String,
        // require:true
    },

});


module.exports = mongoose.model('Login', LoginSchema)