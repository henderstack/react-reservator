import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      tableState = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: true,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: '300px',
      };

      reservations = this.props.reservations;

      render() {
        return (
          <div>
            
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
                displayRowCheckbox={this.tableState.showCheckboxes}
                deselectOnClickaway={this.tableState.deselectOnClickaway}
                showRowHover={this.tableState.showRowHover}
                stripedRows={this.tableState.stripedRows}
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
                  <TableRowColumn>Index</TableRowColumn>
                  <TableRowColumn>Name</TableRowColumn>
                  <TableRowColumn>Hotel Name</TableRowColumn>
                  <TableRowColumn>Arrival Date</TableRowColumn>
                  <TableRowColumn>Departure Date</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                    React-Reservator: Reservations
                  </TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        );
    }
  }

  export default ReservationTable