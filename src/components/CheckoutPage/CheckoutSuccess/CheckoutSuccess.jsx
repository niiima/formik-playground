import React from "react";
import { Typography } from "@material-ui/core";

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you Apllyment
      </Typography>
      <Typography variant="subtitle1">
        Your choices will procceede . . .
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
