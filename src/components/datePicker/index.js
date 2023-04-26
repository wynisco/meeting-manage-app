import React from "react";
import DatePickerNPM from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ date, onChange }) => {
  return <DatePickerNPM selected={date} onChange={(date) => onChange(date)} />;
};

export default DatePicker;
