const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReservationSchema = new Schema({
    id: { type: String,
        required: true },
    name: { type:String, 
        required: true },
    hotelName: { type: String, 
        required: true },
    arrivalDate: { type: Date, 
        required: true },
    departureDate: { type: Date, 
        required: true }
});

const Model = mongoose.model('reservations', ReservationSchema);
module.exports = Model;