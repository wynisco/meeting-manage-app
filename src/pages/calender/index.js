import * as React from "react";
import { useState, useEffect } from "react";
import "./calender.css";
import DatePicker from "../../components/datePicker";
import EMAIL_IDS, { EMAIL_ID_STRING_ARRAY } from "../../constants/emailIds";
import useGetQuery from "../../hooks/getQuery.hook.js";
import { apiUrls } from "../../apis/urls";
import Meetings from "./meetings";

export default function Calender() {
  const { getQuery, loading, data = {} } = useGetQuery();
  const [date, setDate] = useState(new Date());
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getQuery({
      url: apiUrls.getMeetings,
      options: {
        headers: {
          email: "data@wynisco.com",
        },
      },
    });
    console.log(data);
  }, [date]);

  const styles = {
    table: {
      borderCollapse: "collapse",
    },
    cell: {
      border: "1px solid black",
      padding: "10px",
    },
  };

  const Table = () => {
    const EMAIL_IDS = ["email1@gmail.com", "email2@gmail.com"]; // Replace with your email IDs
    const col = EMAIL_IDS.length + 1;
    const row = 25;

    const data1 = {
      6: ["meeting1", "meeting2"],
      7: ["meeting1"],
    }; // Replace with your actual data for email1@gmail.com

    const data2 = {
      6: ["meeting3", "meeting4"],
      7: ["meeting2", "meeting3"],
    }; // Replace with your actual data for email2@gmail.com

    const renderTableHeader = () => {
      const headers = ["Time", ...EMAIL_IDS];

      return headers.map((header, index) => (
        <th key={index} style={styles.cell}>
          {header}
        </th>
      ));
    };

    const renderTableRows = () => {
      const rows = [];

      for (let i = 0; i < row; i++) {
        const cells = [];

        for (let j = 0; j < col; j++) {
          let displayHour = i + 1;
          if (j === 0) {
            // Render row label
            cells.push(
              <td key={`col-${j}`} style={styles.cell}>
                {`${displayHour}`}
              </td>
            );
          } else {
            const emailId = EMAIL_IDS[j - 1];
            let meetings = [];

            if (emailId === "email1@gmail.com") {
              meetings = data1[displayHour] || [];
            } else if (emailId === "email2@gmail.com") {
              meetings = data2[displayHour] || [];
            }

            const meetingText = meetings.length > 0 ? meetings.join(", ") : "";

            cells.push(
              <td key={`col-${j}`} style={styles.cell}>
                {meetingText}
              </td>
            );
          }
        }

        rows.push(<tr key={`row-${i}`}>{cells}</tr>);
      }

      return rows;
    };

    return (
      <table style={styles.table}>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mx-4 my-2">
        <div className="">
          <DatePicker date={date} onChange={setDate} />
          <div className="mt-3">
            <a href="/">Listing View</a>
          </div>
        </div>
        <div className="font-weight-bold h4">Zoom Ledger</div>
      </div>
      <div className=" mx-2 mb-3 d-flex justify-content-center">{Table()}</div>
      {/* <div>sdf+ {data}</div> */}
    </>
  );
}
