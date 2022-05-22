import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function PaymentMethod(props) {
  const option = props.step.description;
  const [value, setValue] = React.useState("Paypal");
  const handChange = (e) => {
    setValue(e.target.value);
    props.useMethod(e.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handChange}
      >
        {option.map((op, idx) => {
          return (
            <FormControlLabel
              key={idx}
              value={op}
              control={<Radio />}
              label={op}
              required
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
