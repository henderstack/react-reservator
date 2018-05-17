import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, withRouter } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui/Tabs'
import ReservationTable from '../components/ReservationTable'
import ReservationSearchTable from '../components/ReservationSearchTable'

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    }
  }



class ReservationsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 'a'
        }
    }

    handleChange = (value) => {
        this.setState({
          value: value,
        })
      }

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="All Booked Reservations" value="a">
                    <div>
                        <ReservationTable/>
                    </div>
                </Tab>
                <Tab label="Search Reservations">
                    <div>
                        <ReservationSearchTable/>
                    </div>
                </Tab>
            </Tabs>
        )
    }

}

export default (withRouter(ReservationsContainer))