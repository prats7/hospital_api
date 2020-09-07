//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/hospital_api_db');

//acquire the connection(to check if it is successful )
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running print the messages
db.once('open', function(){
    console.log('Successfully conected to the database::MongoDB');
});
