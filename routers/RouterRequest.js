const express = require("express");
const Router_Request = express.Router();
const Controller_Request = require("../controllers/ControllerRequest");
const AuthenticateToken = require("../middlewars/authenticate");

Router_Request.get('/', Controller_Request.getAllRequest);
Router_Request.post('/', Controller_Request.createRequest);
Router_Request.put('/update/:id', AuthenticateToken, Controller_Request.updateRequest);
Router_Request.put('/term/:id', AuthenticateToken, Controller_Request.updateTerms);

module.exports = Router_Request;