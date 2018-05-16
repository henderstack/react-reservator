import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
    let overwrites = {
        "palette": {
            "primary1Color": "#006064",
            "accent3Color": "#81c784",
            "accent2Color": "#80cbc4",
            "accent1Color": "#4db6ac",
            "canvasColor": "#b2dfdb",
            "textColor": "#616161",
            "secondaryTextColor": "#78909c",
            "alternateTextColor": "rgba(0, 0, 0, 0.26)",
            "borderColor": "rgba(0, 0, 0, 0.54)",
            "disabledColor": "rgba(0, 0, 0, 0.54)",
            "shadowColor": "#424242",
            "pickerHeaderColor": "#80cbc4"
        },
        "appBar": {
            "color": "#004d40",
            "textColor": "rgba(255, 255, 255, 0.54)"
        },
        "badge": {
            "secondaryTextColor": "rgba(255, 255, 255, 0.87)",
            "primaryTextColor": "#cfd8dc"
        },
        "icon": {
            "color": "rgba(0, 0, 0, 0.26)"
        },
        "table": {
            "backgroundColor": "#cfd8dc"
        },
        "tableRow": {
            "selectedColor": "#80cbc4",
            "hoverColor": "#b2dfdb",
            "textColor": "#757575"
        },
        "tableHeaderColumn": {
            "textColor": "#00695c"
        },
        "tabs": {
            "textColor": "#26a69a"
        },
        "textField": {
            "errorColor": "#ef9a9a"
        }
    }
    return getMuiTheme(baseTheme, overwrites);
  }

export default getTheme;