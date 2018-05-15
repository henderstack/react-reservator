const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLDate = require('graphql-iso-date').GraphQLDate;
const reservationType = require('../types/reservation').reservationType;
const ReservationModel = require('../../models/Reservation');

exports.addReservation = {
  type: reservationType,
  args: {
    reservationId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    hotelName: {
        type: new GraphQLNonNull(GraphQLString)
    },
    arrivalDate: {
        type: new GraphQLNonNull(GraphQLDate)
    },
    departureDate: {
        type: new GraphQLNonNull(GraphQLDate)
    }
  },
  resolve(root, params) {
    const rModel = new ReservationModel(params);
    const newReservation = rModel.save();
    if (!newReservation) {
      throw new Error('Error');
    }
    return newReservation;
  }
}