const mongoose = require('mongoose');
const { Schema } = mongoose;

const CandidatoSchema = new mongoose.Schema({
  dniCan: { type: String, required: true},
  nombres: { type: String, required: true},
  cantidad: { type: Number, default: 0 },
  votos: [
    {type: Number}
  ]
});

CandidatoSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model('candidato', CandidatoSchema);

