const Docs = require('../../../models/doctor');
const jwt = require('jsonwebtoken');


//register a new doctor if it's not present

module.exports.create = async function(req, res){
    try{
       
        if(req.body.password !== req.body.confirm_password){
            return res.status(401).json({
                message: 'Incorrect Password',
            })
        }
        let docex = await Docs.findOne({email: req.body.email});
        if(docex){
            return res.status(200).json({
                message: 'Email is registered',
            });
        }
        else{
            let newDoc = await Docs.create(req.body);

            
            return res.status(200).json({
                message: 'Registered successfully',
                data: {
                    doc: newDoc,
                }
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: 'Internal Server Error',
        })
    }
}

//Sign in
module.exports.createSession2 = async function(req, res){
    try{
        let doc = await Docs.findOne({email: req.body.email});

        if(!doc || doc.password != req.body.password){
            return res.status(422).json({
                message: "Invalid username or password",
            });
        }
        return res.status(200).json({
            message: "loged in successfully",
            data: {
                token: jwt.sign(doc.toJSON(), 'secret', {expiresIn: '2000000'}),
            }
        })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            message: 'Internal Server Error',
        })
    }
}