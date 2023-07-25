const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  facture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'factures',
    required: true,
  },
  dateDebut: {
    type: Date,
    required: true,
  },
  dateFin: {
    type: Date,
    required: true,
  },
  numGuests: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dateReservation: {
    type: Date,
    required: true,
  },
  dateMiseAJour: {
    type: Date,
    required: true,
  },
});

const ReservationModel = mongoose.model('reservations', reservationSchema);
module.exports = ReservationModel;