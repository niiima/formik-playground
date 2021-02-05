import React from "react";
import useStyles from "./styles";

const Container = (props) => {
  const { children } = props;

  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
