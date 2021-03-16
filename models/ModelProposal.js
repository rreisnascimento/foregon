const mongoose = require("../database/connection");
const Schema = mongoose.Schema;

const ProposalSchema = new Schema({
  productId: { type: Number, required: true },
  name:      { type: String, required: true },
  email:     { type: String },
  cpf:       { type: String },
  birthdate: { type: Date },
  phone:     { type: String },
  request:   { type: Date },
  created:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('proposal', ProposalSchema);