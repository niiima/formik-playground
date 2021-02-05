import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../FormFields";

export default function ResultForm(props) {
  const {
    formField: { firstName, lastName, email, phone }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        RESULTS!
      </Typography>
      To receive your smile assessment results, along with a complimentary
      consultation with our treatment coordinator, please complete your details
      below:
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
