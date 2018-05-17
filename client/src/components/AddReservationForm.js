import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Paper } from 'material-ui'

const ADD_RESERVATION = gql`
    mutation addReservation($reservationId:ID!, $name:String!, $hotelName:String!, $arrivalDate:Date!, $departureDate:Date!) {
        addReservation(reservationId:$reservationId, name:$name, hotelName:$hotelName, arrivalDate:$arrivalDate, departureDate:$departureDate ) {
            reservationId
            name
            hotelName
            arrivalDate
            departureDate
        }
    }`

const AddReservationForm = () => {

    return (
        <Mutation mutation={ADD_RESERVATION}>
            <div></div>
        </Mutation>
    )
}