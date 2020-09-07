const express = require('express');
const router = express.Router();
const passport = require('passport');


const docController = require('../controllers/api/v1/doctor_controller');
//creating route for doctor
router.post('/register', docController.create);
router.post('/login2', docController.createSession2);

module.exports = router;