const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLDate = require('graphql-iso-date').GraphQLDate;

// User Type
exports.reservationType = new GraphQLObjectType({
  name: 'reservation',
  fields:  () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      hotelName: {
          type: GraphQLString
      },
      arrivalDate: {
          type: GraphQLDate
      },
      departureDate: {
          type: GraphQLDate
      }
    }
  }
});