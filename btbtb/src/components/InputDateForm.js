import React from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns/";
import sv from "date-fns/locale/sv";
import { Controller } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const InputDateForm = (props) => {
  return (
    <Controller
      control={props.control}
      name="date-input"
      defaultValue={new Date()}
      render={({ field = new Date() }) => (
        <DatePicker
          placeholderText="Select date"
          onChange={(date) => field.onChange(date)}
          minDate={new Date()}
          maxDate={addDays(new Date(), 31)}
          locale={sv}
          showWeekNumbers
          inline
        />
      )}
    />
  );
};

export default InputDateForm;
