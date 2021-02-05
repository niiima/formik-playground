import React from "react";
import { Grid } from "@material-ui/core";
import { Field } from "formik";
import { MultiCheckboxField, InputField } from "../../FormFields";

export default function SymptomForm(props) {
  const {
    formField: { symptomCategory, symptomDetail }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={12} md={4}>
          <Field
            name={symptomCategory.name}
            label={symptomCategory.label}
            data={symptomCategory.data}
            fieldElement={symptomCategory}
            component={MultiCheckboxField}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <InputField
            name={symptomDetail.name}
            label={symptomDetail.label}
            fullWidth
            multiline
            rows="4"
          ></InputField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
