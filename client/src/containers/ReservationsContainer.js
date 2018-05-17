import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui/Tabs'
import ReservationTable from '../components/ReservationTable'
import ReservationSearchTable from '../components/ReservationSearchTable'



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
                <Tab label="Search Reservations" value="b">
                    <div>
                        <ReservationSearchTable/>
                    </div>
                </Tab>
            </Tabs>
        )
    }

}

export default (withRouter(ReservationsContainer))