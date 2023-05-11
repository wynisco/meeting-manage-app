import * as React from "react";
import { useState, useEffect } from "react";
import "./calender.css";
import DatePicker from "../../components/datePicker";
import EMAIL_IDS from "../../constants/emailIds";
import useGetQuery from "../../hooks/getQuery.hook.js";
import { apiUrls } from "../../apis/urls";

export default function Calender() {
  const { getQuery, loading, data: { data = [] } = {} } = useGetQuery();
  const [date, setDate] = useState(new Date());
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getQuery({
      url: apiUrls.getMeetingsByHour,
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
    const col = EMAIL_IDS.length + 1;
    const row = 13;

    const renderTableHeader = () => {
      const headers = ["Timing"];

      for (let i = 0; i < EMAIL_IDS.length; i++) {
        headers.push(EMAIL_IDS[i].email);
      }

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
          if (j === 0) {
            // Render row label
            let displayHour = i + 9;
            if (displayHour > 12) {
              displayHour -= 12;
            }

            cells.push(
              <td key={`col-${j}`} style={styles.cell}>
                {`${displayHour}am`}
              </td>
            );
          } else {
            // Render Demo Email ID cells
            cells.push(
              <td key={`col-${j}`} style={styles.cell}>
                demo@example.com
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
      <div>sdf+ {data}</div>
    </>
  );
}
