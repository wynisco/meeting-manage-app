import React from "react";
import DatePickerNPM from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ date, onChange, minDate }) => {
  return (
    <DatePickerNPM
      selected={date}
      onChange={(date) => onChange(date)}
      minDate={minDate}
    />
  );
};

export default DatePicker;
