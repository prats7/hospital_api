const mongoose = require('mongoose');

//Doctor schema: required fields

const doctorSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
    timestamps: true,
    }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;