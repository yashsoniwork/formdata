const mongoose = require('mongoose');
const employSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    }
})


// creating model

const Registration = mongoose.model('Registration', employSchema);
Registration.init()

module.exports = Registration;