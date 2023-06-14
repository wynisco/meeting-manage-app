import React, { useState } from "react";
import "./home.css";
import Account from "./account";
import EMAIL_IDS from "../../constants/emailIds";
import DatePicker from "../../components/datePicker";

export default function TableForm() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mx-4 my-2">
        <div className="">
          <DatePicker date={date} onChange={setDate} />
          <div className="mt-3">
            <a href="/calender">Calender View</a>
          </div>
        </div>
        <div className="font-weight-bold h4">Zoom Ledger</div>
      </div>
      <div className="main-card-content">
        {EMAIL_IDS.map((email, i) => {
          return <Account date={date} email={email} key={`account_${i}`} />;
        })}
      </div>
    </>
  );
}
