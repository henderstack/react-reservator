import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, withRouter } from 'react-router-dom';
import ReservationTable from '../components/ReservationTable';

class ReservationsContainer extends React.Component {

    componentDidMount() {}

    render() {

        //add loading and failure state
        if (this.props.isLoading) {
            return <span>Loading...</span>
        }

        if (this.props.isFailure) {
            return <span>Error loading Reservations!</span>
        }

        return (
            <div>
                {this.props.reservations && <ReservationTable reservations={this.props.reservations} />}
            </div>
        );
    }

}

const RESERVATIONS_QUERY = gql`
    query {
        reservations {
        reservationId
        name
        hotelName
        arrivalDate
        departureDate
        }
    }`

export default graphql(RESERVATIONS_QUERY, {
    name: 'reservations',
    options: {fetchPolicy: 'network-only'}
})(withRouter(ReservationsContainer))