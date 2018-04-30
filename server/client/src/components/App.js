import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getTheme from '../theme/theme';
import 'typeface-roboto';

import Header from './Header';

const muiTheme = getTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
