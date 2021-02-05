import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FieldArray, useField } from "formik";

import { Checkbox, FormHelperText, Typography } from "@material-ui/core";

const MultiCheckboxField = (props) => {
  const { data, fieldElement, ...rest } = props;
  const [field, meta, helper] = useField(fieldElement);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;

  const [selected, setSelected] = useState(
    data.filter((el) => el.checked).map((el) => el.id)
  );

  useEffect(() => {
    setValue(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <Typography variant="inherit">{fieldElement.label}</Typography>
      <FieldArray
        name={fieldElement.name}
        field={fieldElement}
        render={() => {
          return (
            <>
              {data.map((category, index) => (
                <div key={category.id}>
                  <Typography noWrap>
                    <label>
                      <Checkbox
                        name={category.id}
                        value={category.id}
                        checked={value.includes(category.id)}
                        onChange={(e) => {
                          data[index].checked = !!e.target.checked;
                          setSelected(
                            data.filter((el) => el.checked).map((el) => el.id)
                          );

                          if (props.handelOnChange) props.handelOnChange(e);
                        }}
                      />{" "}
                      {category.name}
                    </label>
                  </Typography>
                </div>
              ))}
            </>
          );
        }}
        {...rest}
      />

      {isError && <FormHelperText error={true}>{error}</FormHelperText>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};

MultiCheckboxField.defaultProps = {
  data: []
};

MultiCheckboxField.propTypes = {
  data: PropTypes.array.isRequired
};

export default MultiCheckboxField;
