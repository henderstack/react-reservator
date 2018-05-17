import React from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Paper, FlatButton, TextField, DatePicker } from 'material-ui'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'


  const RESERVATIONS_QUERY = gql`
    query  queryReservations {
        reservations {
        reservationId
        name
        hotelName
        arrivalDate
        departureDate
        }
    }`

    const state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '350px',
    }

    const searchStyle = {
      margin: 20,
      display: 'flex',
      flexDirection: 'row',
    }

    const searcButtonStyle = {
      marginLeft: 12
    }

    const searchFieldStyle = {
      marginRight: 12
    }

  const ReservationTable = () => (
    <Query
      query={ RESERVATIONS_QUERY }
    >

      {({ loading, error, data, refetch, networkStatus }) => {
        if (networkStatus === 4) return "Refetching!";
        if (loading) return null;
        if (error) return `Error!: ${error}`;

       
        return (

            <div>
              <Paper style={{textAlign:'center', margin:40, padding:40}}>
                <div style={ this.searchStyle }>
                  <div><h1>Booked Reservations</h1></div>
                  <hr />
                </div>
                { data.reservations &&
                <Table
                  height={this.state.height}
                  fixedHeader={this.state.fixedHeader}
                  fixedFooter={this.state.fixedFooter}
                  selectable={this.state.selectable}
                  multiSelectable={this.state.multiSelectable}
                  onRowSelection={this.props.onRowSelection}
                >
                  <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                  >
                    <TableRow>
                      <TableHeaderColumn colSpan="5" tooltip="" style={{textAlign: 'center'}}>
                        React-Reservator: Reservations
                      </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                      <TableHeaderColumn tooltip="The Reservation's ID">Index</TableHeaderColumn>
                      <TableHeaderColumn tooltip="The Customer Name">Name</TableHeaderColumn>
                      <TableHeaderColumn tooltip="The Name of the Hotel">Hotel Name</TableHeaderColumn>
                      <TableHeaderColumn tooltip="The Customer's Date of Arrival (yyyy-mm-dd)">Arrival Date</TableHeaderColumn>
                      <TableHeaderColumn tooltip="The customer's Date of Departure (yyyy-mm-dd)">Departure Date</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                  >
                    {data.reservations.map( (row, index) => (
                      <TableRow key={index}>
                        <TableRowColumn>{index}</TableRowColumn>
                        <TableRowColumn>{row.name}</TableRowColumn>
                        <TableRowColumn>{row.hotelName}</TableRowColumn>
                        <TableRowColumn>{row.arrivalDate}</TableRowColumn>
                        <TableRowColumn>{row.departureDate}</TableRowColumn>
                      </TableRow>
                      ))}
                  </TableBody>
                  <TableFooter
                    adjustForCheckbox={this.state.showCheckboxes}
                  >
                    <TableRow>
                      <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                        React-Reservator: Reservations
                      </TableRowColumn>
                    </TableRow>
                  </TableFooter>
                </Table>
                }
              </Paper>
            </div>
        )
      }}
    </Query>
  )

  export default ReservationTable

 /* class ReservationTable extends Component {
    
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
        height: '350px',
      }

      reservations = this.props.reservations

    state = {
        hotelName: '',
        arrivalDate: null,
        departureDate: null
    }
      
      
      searchStyle = {
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
      }

      searcButtonStyle = {
        marginLeft: 12
      }

      searchFieldStyle = {
        marginRight: 12
      }

      render() {
        return (
          <div>
            <Paper style={{textAlign:'center', margin:40, padding:40}}>
              <div style={ this.searchStyle }>
                <div><h1>Booked Reservations</h1></div>
                <hr />
              </div>
              <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}
                onRowSelection={this.props.onRowSelection}
              >
                <TableHeader
                  displaySelectAll={this.state.showCheckboxes}
                  adjustForCheckbox={this.state.showCheckboxes}
                  enableSelectAll={this.state.enableSelectAll}
                >
                  <TableRow>
                    <TableHeaderColumn colSpan="5" tooltip="" style={{textAlign: 'center'}}>
                      React-Reservator: Reservations
                    </TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn tooltip="The Reservation's ID">Index</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Customer Name">Name</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Name of the Hotel">Hotel Name</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Customer's Date of Arrival (yyyy-mm-dd)">Arrival Date</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The customer's Date of Departure (yyyy-mm-dd)">Departure Date</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={this.state.showCheckboxes}
                  deselectOnClickaway={this.state.deselectOnClickaway}
                  showRowHover={this.state.showRowHover}
                  stripedRows={this.state.stripedRows}
                >
                  {this.reservations.map( (row, index) => (
                    <TableRow key={index}>
                      <TableRowColumn>{index}</TableRowColumn>
                      <TableRowColumn>{row.name}</TableRowColumn>
                      <TableRowColumn>{row.hotelName}</TableRowColumn>
                      <TableRowColumn>{row.arrivalDate}</TableRowColumn>
                      <TableRowColumn>{row.departureDate}</TableRowColumn>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter
                  adjustForCheckbox={this.state.showCheckboxes}
                >
                  <TableRow>
                    <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                      React-Reservator: Reservations
                    </TableRowColumn>
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          </div>
        );
    }
  }

  export default ReservationTable */