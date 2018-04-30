const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReservationSchema = new Schema({
    reservationId: { type: String,
        required: true },
    name: { type:String, 
        required: true },
    hotelName: { type: String, 
        required: true },
    arrivalDate: { type: String, 
        required: true },
    departureDate: { type: String, 
        required: true }
});

const Model = mongoose.model('reservations', ReservationSchema);
module.exports = Model;