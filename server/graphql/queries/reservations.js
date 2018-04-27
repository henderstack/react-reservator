const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const reservationType = require('../types/reservation').reservationType;
const ReservationModel = require('../../models/Reservation');

// Query
exports.queryType = new GraphQLObjectType({
  name: 'QueryAll',
  fields: () => {
    return {
      reservations: {
        type: new GraphQLList(reservationType),
        resolve: () => {
          const reservations = ReservationModel.find().exec()
          if (!reservations) {
            throw new Error('Error')
          }
          return reservations
        }
      },
      reservation: {
          type: reservationType,
          args: {
            id: {
              name: 'id',
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: (root, params) => {
            const reservation = ReservationModel.findById( params.id )
            if (!reservation) {
              throw new Error('Error')
            }
            return reservation
          }
      }
    }
  }
});