import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getTheme from '../theme/theme';
import 'typeface-roboto';

import Header from './Header';
import ReservationsContainer from '../containers/ReservationsContainer';

const muiTheme = getTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header/>
          <p>{process.env.REACT_APP_GQL_URI}</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
