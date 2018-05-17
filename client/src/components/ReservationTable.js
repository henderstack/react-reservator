import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Paper  from 'material-ui/Paper'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'


  export const RESERVATIONS_QUERY = gql`
    query  queryReservations {
        reservations {
        reservationId
        name
        hotelName
        arrivalDate
        departureDate
        }
    }`

  class ReservationTable extends Component {

    state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      reservations: null, 
    }

    render () {
        return (
          <Query query={RESERVATIONS_QUERY}>
             {({ data }) => {
               return (
                <Paper style={{textAlign:'center', margin:40, padding:40}}>
                  <div style={{margin: 20, display: 'flex', flexDirection: 'row', }}>
                    <div><h1>Booked Reservations</h1></div>
                    <hr />
                  </div>
                  <Table
                    height='350px'
                    fixedHeader={true}
                    fixedFooter={true}
                    selectable={true}
                    multiSelectable={true}
                  >
                    <TableHeader
                      displaySelectAll={true}
                      adjustForCheckbox={true}
                      enableSelectAll={false}
                    >
                      <TableRow>
                        <TableHeaderColumn colSpan="5" tooltip="" style={{textAlign: 'center'}}>
                          React-Reservator: Reservations
                        </TableHeaderColumn>
                      </TableRow>
                      <TableRow>
                        <TableHeaderColumn tooltip="The Reservation's Unique ID">Reservation ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Customer Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name of the Hotel">Hotel Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Customer's Date of Arrival (yyyy-mm-dd)">Arrival Date</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The customer's Date of Departure (yyyy-mm-dd)">Departure Date</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody
                      displayRowCheckbox={true}
                      deselectOnClickaway={true}
                      showRowHover={true}
                      stripedRows={true}
                    >
                      {data.reservations && data.reservations.map( (row, index) => (
                        <TableRow key={index}>
                          <TableRowColumn>{row.reservationId}</TableRowColumn>
                          <TableRowColumn>{row.name}</TableRowColumn>
                          <TableRowColumn>{row.hotelName}</TableRowColumn>
                          <TableRowColumn>{row.arrivalDate}</TableRowColumn>
                          <TableRowColumn>{row.departureDate}</TableRowColumn>
                        </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                      adjustForCheckbox={true}
                    >
                      <TableRow>
                        <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                          React-Reservator: Reservations
                        </TableRowColumn>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </Paper>
               )
             }}
          </Query>
        )
  }
}

  export default (withRouter(ReservationTable))

