const express = require('express');

const port = 9000;

const app = express();

const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

//Import route
const doctorRoute = require('./routes/doctor');
const patientRoute = require('./routes/patient');
const reportRoute = require('./routes/report');


//Middleware
app.use('/doctor', doctorRoute);
app.use('/patient', patientRoute);
app.use('/report', reportRoute);

//ROUTES
app.get('/',(req,res) => {
    res.send('Hello');
});



//listening to server
app.listen(port, function(err){
    if (err){ console.log('Error in running the server', err);}

    console.log('Express Server is running on port',port);
});