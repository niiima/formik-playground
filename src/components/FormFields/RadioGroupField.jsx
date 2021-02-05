import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormLabel, Typography } from "@material-ui/core";
// import { FormHelperText, FormLabel } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";

// Uncomment bellow lines along with import statements to customize style of each radio input

// const useStyles = makeStyles({
//   root: {
//     "&:hover": {
//       backgroundColor: "transparent",
//     },
//   },
//   icon: {
//     borderRadius: "50%",
//     width: 16,
//     height: 16,
//     boxShadow:
//       "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
//     backgroundColor: "#f5f8fa",
//     backgroundImage:
//       "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
//     "$root.Mui-focusVisible &": {
//       outline: "8px auto rgba(19,124,189,.6)",
//       outlineOffset: 8,
//     },
//     "input:hover ~ &": {
//       backgroundColor: "#ebf1f5",
//     },
//     "input:disabled ~ &": {
//       boxShadow: "none",
//       background: "rgba(206,217,224,.5)",
//     },
//   },
//   checkedIcon: {
//     backgroundColor: "#137cbd",
//     backgroundImage:
//       "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
//     "&:before": {
//       display: "block",
//       width: 16,
//       height: 16,
//       backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
//       content: '""',
//     },
//     "input:hover ~ &": {
//       backgroundColor: "#106ba3",
//     },
//   },
// });

// Inspired by blueprintjs
// function StyledRadio(props) {
//   const classes = useStyles();
//   return (
//     <Radio
//       className={classes.root}
//       // disableRipple
//       color="default"
//       checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
//       icon={<span className={classes.icon} />}
//       {...props}
//     />
//   );
// }

// function _renderHelperText(error) {
//   return <FormHelperText error={true}>{error}</FormHelperText>;
// }

const RadioGroupField = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        <FormLabel
          component="legend"
          style={{
            color: `${
              touched[fieldName] && errors[fieldName]
                ? "var(--error-color)"
                : "var(----main-color)"
            }`,
            position: "absolute",
            margin: "-10px -15px"
          }}
        >
          {" "}
          <Typography
            noWrap
            variant="body1"
            style={{
              padding: 0,
              top: "-10px",
              position: "absolute",
              width: "330px"
            }}
          >
            {props.label}
          </Typography>
        </FormLabel>

        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            // control={<StyledRadio />}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      {/* {touched[fieldName] &&
        errors[fieldName] &&
        _renderHelperText(errors[fieldName])} */}
    </React.Fragment>
  );
};

export default RadioGroupField;
