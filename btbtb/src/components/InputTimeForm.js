import React from "react";
import DatePicker from "react-datepicker";
import sv from "date-fns/locale/sv";
import { Controller } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const InputTimeForm = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={new Date()}
      render={({ field = new Date() }) => (
        <DatePicker
          selected={props.startDate}
          onChange={(date) => props.setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Tid"
          dateFormat="hh:mm"
          locale={sv}
          wrapperClassName="style={color: red;}"
        />
      )}
    />
  );
};

export default InputTimeForm;
