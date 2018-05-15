import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
    let overwrites = {
      "palette": {
          "primary1Color": Colors.cyan900,
          "primary2Color": Colors.teal400,
          "primary3Color": Colors.teal100,
          "accent1Color": Colors.pink900,
          "accent2Color": Colors.pinkA700,
          "accent3Color": Colors.pinkA400,
          "textColor": Colors.blueGrey200,
          "secondaryTextColor": Colors.grey400,
          "alternateTextColor": Colors.blueGrey500,
          "canvasColor": Colors.grey600,
          "borderColor": fade(Colors.lightBlack, 0.54),
          "disabledColor": fade(Colors.lightWhite, 0.54),
          "pickerHeaderColor": fade(Colors.faintBlack, 0.12),
          "clockCircleColor": fade(Colors.lightBlack, 0.54)
      },
      "appBar": {
          "textColor": Colors.blueGrey400
      }
  };
    return getMuiTheme(baseTheme, overwrites);
  }

export default getTheme;