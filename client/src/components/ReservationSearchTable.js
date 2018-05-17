import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { ApolloConsumer } from 'react-apollo';
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


export const RESERVATION_NAME_DATES_QUERY = gql`
  query getReservationsByHotelNameAndDates($hotelName: String!, $arrivalDate: Date!, $departureDate: Date!) {
      reservationByNameDates(hotelName:$hotelName, arrivalDate:$arrivalDate, departureDate:$departureDate) {
          reservationId
          name
          hotelName
          arrivalDate
          departureDate
      }
  }`

class ReservationSearchTable extends Component {

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
      hotelName: '',
      arrivalDate: null,
      departureDate: null,
      arrDateStr: '',
      depDateStr: ''
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

    handleHotelNameChange = (e) => {
        this.setState({
          hotelName: e.target.value
        })
      }

    handleArrivalDateChange = (e, date) => {
        let arrivalDate = date.toISOString()
        arrivalDate = arrivalDate.substring(0, 10)
        this.setState({
            arrDateStr: arrivalDate
        })
        this.setState({
          arrivalDate: date
        })
    }

    handleDepartureDateChange = (e, date) => {
        let departureDate = date.toISOString()
        departureDate = departureDate.substring(0, 10)
        this.setState({
            depDateStr: departureDate
        })
        this.setState({
          departureDate: date
        })
    }

    handleSearchButtonClick = (e) => {
        this.props.handleSearchClick(this.state)
    }

    onReservationsFetched = reservations => this.setState(() => ({ reservations }))

    render () {
        return (
            <ApolloConsumer>
                { client => (
                    <div>
                        <Paper style={{textAlign:'center', margin:40, padding:40}}>
                            <div style={ this.searchStyle }>
                                <div><h1>Booked Reservations</h1></div>
                                <hr />
                                <TextField 
                                    hintText='Hotel Name' 
                                    style={this.searchFieldStyle} 
                                    value={this.state.hotelName}
                                    onChange={this.handleHotelNameChange}
                                    />
                                <DatePicker 
                                    hintText="Arrival Date" mode="landscape" 
                                    style={this.searchFieldStyle} 
                                    value={this.state.arrivalDate}
                                    onChange={this.handleArrivalDateChange} />
                                <DatePicker 
                                    hintText="Departure Date" mode="landscape" 
                                    style={this.searchFieldStyle} 
                                    value={this.state.departureDate}
                                    onChange={this.handleDepartureDateChange} />
                                <FlatButton 
                                    label="Search" 
                                    secondary={true} 
                                    style={this.searchButtonStyle} 
                                    onClick={async () => {
                                        const { data } = await client.query({
                                          query: RESERVATION_NAME_DATES_QUERY,
                                          variables: { hotelName: this.state.hotelName,
                                                       arrivalDate: this.state.arrDateStr,
                                                       departureDate: this.state.depDateStr }
                                        });
                                        this.onReservationsFetched(data.reservationByNameDates);
                                      }} />
                            </div>
                            { this.state.reservations &&
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
                                    <TableHeaderColumn tooltip="The Reservation's Unique ID">Reservation ID</TableHeaderColumn>
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
                                {this.state.reservations.map( (row, index) => (
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
                )}
            </ApolloConsumer>
        )
    }
}

export default (withRouter(ReservationSearchTable))

