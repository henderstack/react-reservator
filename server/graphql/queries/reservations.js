const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLDate = require('graphql-iso-date').GraphQLDate;
const reservationType = require('../types/reservation').reservationType;
const ReservationModel = require('../../models/Reservation');
const moment = require('moment');

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
            reservationId: {
              name: 'reservationId',
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: (root, params) => {
            const reservation = ReservationModel.findOne( {reservationId: params.reservationId} )
            if (!reservation) {
              throw new Error('Error')
            }
            return reservation
          }
        },
        reservationByNameDates: {
          type: new GraphQLList(reservationType),
          args: {
            hotelName: {
              name: 'hotelName',
              type: new GraphQLNonNull(GraphQLString)
            },
            arrivalDate: {
              name: 'arrivalDate',
              type: new GraphQLNonNull(GraphQLString)
            },
            departureDate: {
              name: 'departureDate',
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: (root, params) => {
            return ReservationModel.find(
              {
                "$or": [{
                  "$and": [{
                    "hotelName": params.hotelName
                  }, {
                    "arrivalDate": params.arrivalDate
                  }]
                },
                {
                  "$and": [{
                    "hotelName": params.hotelName
                  }, {
                    "arrivalDate": params.arrivalDate
                  }]
                },
                {
                  "$and": [{
                    "hotelName": params.hotelName
                  }, {
                    "departureDate": params.departureDate
                  }]
                }
              ]
            }, (err, data) => {
              return data;
            });
          }
      }
    }
  }
});