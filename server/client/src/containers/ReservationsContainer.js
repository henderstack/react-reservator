import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                {this.props.reservations && <ReservationTable todos={this.props.reservations} />}
            </div>
        );
    }

}

const mapStateToProps = ({ reservations }) => {
    return {
        ...reservations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadReservations: () => {
            dispatch(gqlFetchAllAction({ userId }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer);