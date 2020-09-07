const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

//Creating new report

module.exports.create = async function(req, res){
    try{
        let patient = await Patient.findOne({phoneNumber: req.body.phoneNumber});
        if(!patient){
            patient = await Patient.create({
                name: req.body.name,
                phoneNumber:req.body.phoneNumber,
            });
        }
        return res.status(200).json({
            message: "patient successfully registered",
            patient: patient,
        });
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        });
    }
}

//Fetching all report of patient

module.exports.allReports = async function(req, res){
    try{
        let reports = await Report.find({patient: req.params.id});
        return res.status(200).json({
            message: "reports of patient",
            reports: reports,
        })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        });
    }
}