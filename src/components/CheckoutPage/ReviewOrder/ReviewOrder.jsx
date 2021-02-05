import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";

// import PaymentDetails from "./PaymentDetails";
import formModel from "../FormModel/checkoutFormModel";
import ReportField from "./ReportField";

export default function ReviewOrder() {
  const { formField } = formModel;
  const { values: formValues } = useFormikContext();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Application summary
      </Typography>
      <Grid container spacing={2}>
        <ReportField formValues={formValues} formData={formField} />
        {/* <PaymentDetails formValues={formValues} />  */}
      </Grid>
    </React.Fragment>
  );
}
