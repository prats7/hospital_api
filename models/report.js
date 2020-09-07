const mongoose = require('mongoose');

//Report schema: required fields

const reportSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        enum: ['Negative', 'Positive', 'Quarantine']
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor',
    }
},{
    timestamps: true,
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;