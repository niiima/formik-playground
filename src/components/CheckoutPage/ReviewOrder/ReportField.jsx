import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Thumb from "../common/Thumb";
import useStyles from "./styles";

const RenderData = (props) => {
  const { field, value } = props;
  switch (field.type) {
    case "radio":
      return <Typography gutterBottom>{`${value}`}</Typography>;
    case "select":
      return <Typography gutterBottom>{`${value}`}</Typography>;
    case "checkbox":
      return field.data.map((d, i) => {
        if (d.checked)
          return <Typography gutterBottom>{`${d.name}`}</Typography>;
        else return false;
      });
    case "text":
      return <Typography gutterBottom>{`${value}`}</Typography>;
    case "image":
      return <Thumb file={value.file} src={value.src} varian={"small"}></Thumb>;
    default:
      return false;
  }
};

function ReportField(props) {
  const { formValues, formData } = props;
  const classes = useStyles();
  return Object.values(formData).map((field) => {
    return (
      <Grid
        item
        xs={12}
        sm={`${field.type === "image" ? 12 : 6}`}
        key={field.name}
      >
        <Typography variant="h6" gutterBottom className={classes.title}>
          {field.label}
        </Typography>
        <RenderData field={field} value={formValues[field.name]}></RenderData>
      </Grid>
    );
  });
}

export default ReportField;
