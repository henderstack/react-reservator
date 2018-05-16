import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

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
        height: '350px',
      };

      reservations = this.props.reservations;
      

      render() {
        return (
          <div>
            <Paper style={{textAlign:'center', margin:40, padding:40}}>
              <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}
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

  export default ReservationTable