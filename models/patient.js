const mongoose = require('mongoose');

//Patient schema: required fields

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true,
}
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;