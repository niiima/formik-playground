import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
// import Toolbar from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
// import logo from "../../assets/logo.png";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        {/* <Typography variant="h6" color="inherit" noWrap>
          Museum Dental Suits
        </Typography> */}
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
          className={classes.logo}
          alt="app logo"
        />
      </Toolbar>
    </AppBar>
  );
}
