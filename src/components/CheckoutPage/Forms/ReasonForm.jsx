import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Field } from "formik";
import { MultiCheckboxField, InputField } from "../../FormFields";

export default function ReasonForm(props) {
  const {
    formField: { reasonCategory, reasonDetail }
  } = props;
  const last = { ...reasonCategory.data[reasonCategory.data.length - 1] };
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (last.checked === true) {
      if (isDisabled !== false) setIsDisabled(false);
    } else {
      if (isDisabled !== true) setIsDisabled(true);
    }
  }, [last.checked, isDisabled]);

  const _handleOnChange = (e) => {
    if (e.id === last.id) {
      last.checked = true;
    }
  };
  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={12} md={5}>
          <Field
            name={reasonCategory.name}
            label={reasonCategory.label}
            data={reasonCategory.data}
            fieldElement={reasonCategory}
            component={MultiCheckboxField}
            handleOnChange={_handleOnChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={7}>
          <InputField
            disabled={isDisabled}
            name={reasonDetail.name}
            label={reasonDetail.label}
            fullWidth
            multiline
            rows="4"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="- Tell us about it
            - 
            - 
            - "
            margin="normal"
          ></InputField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
