import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import PropTypes from "prop-types";

export function CheckboxControl(props) {
  return (
    <div className="checkbox-control" style={props.style}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.checked}
              onChange={() => props.onChange()}
              size={"large"}
              style={{
                color: props.color
              }}
            />}
          label={props.label}
        />
      </FormGroup>
    </div>
  )
}

CheckboxControl.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
};