const mongoose = require("../database/connection");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  name:      { type: String, required: true },
  email:     { type: String },
  cpf:       { type: String },
  birthdate: { type: Date },
  phone:     { type: String },
  accept:    { type: Boolean, default: false },
  created:   { type: Date, default: Date.now },
  updated:   { type: Date }
});

module.exports = mongoose.model('request', RequestSchema);