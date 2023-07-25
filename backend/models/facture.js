const mongoose = require('mongoose');

const factureSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  numFacture: {
    type: Number,
    required: true,
  },
  dateFacture: {
    type: Date,
    required: true,
  }
});

const FactureModel = mongoose.model('factures', factureSchema);
module.exports = FactureModel;