import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: cyan,
    secondary: cyan
  }
});

theme = responsiveFontSizes(theme);
const useStyle = makeStyles(() => ({
  // overrides: {
  //   MuiStepIcon: {
  //     root: {
  //       "&$completed": {
  //         color: "pink",
  //       },
  //       "&$active": {
  //         color: "red",
  //       },
  //     },
  //     active: {},
  //     completed: {},
  //   },
  // },
  root: {
    fontSize: "1.3em",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "75%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    backgroundColor: "transparent", // // theme.palette.background.default,
    color: theme.palette.text.primary
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(0)
    },
    backgroundColor: "transparent"
  }
}));

export { theme, useStyle };
