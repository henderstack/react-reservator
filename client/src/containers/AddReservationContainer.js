import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, withRouter } from 'react-router-dom';

class AddReservationContainer extends Component {

    state = {
        reservationId: '',
        name: '',
        hotelName: '',
        arrivalDate: '',
        departureDate: ''
    }

    render() {

    }

    handlePost = async () => {

    }
}

const ADD_RESERVATION_MUTATION = gql `
    mutation addReservation($reservationId: ID!, $name: String!, $hotelName: String!, $arrivalDate: Date!, $departureDate: Date!) {
        addReservation(reservationId:$reservationId, name:$name, hotelName:$hotelName, arrivalDate:$arrivalDate, departureDate:$departureDate) {
        ...reservationFields
        }
    }
    
    fragment reservationFields on reservation {
        reservationId
        name
        hotelName
        arrivalDate
        departureDate
    }
`

export default graphql(ADD_RESERVATION_MUTATION, {
    name: 'addReservation',
    options: {fetchPolicy: 'network-only'}
})(withRouter(AddReservationContainer))