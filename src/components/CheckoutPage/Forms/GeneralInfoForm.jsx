import React from "react";
import { Grid } from "@material-ui/core";
import { Field } from "formik";
import { RadioGroupField } from "../../FormFields";

export default function GeneralInfoForm(props) {
  const {
    formField: { gender, age, rate }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={3}>
          <Field
            name={gender.name}
            label={gender.label}
            options={gender.data}
            component={RadioGroupField}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Field
            name={age.name}
            label={age.label}
            options={age.data}
            component={RadioGroupField}
            row
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name={rate.name}
            label={rate.label}
            options={rate.data}
            component={RadioGroupField}
            row
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
