import * as React from "react";
import { useState, useEffect } from "react";
import "./calender.css";
import DatePicker from "../../components/datePicker";
import EMAIL_IDS, { EMAIL_ID_STRING_ARRAY } from "../../constants/emailIds";
import useGetQuery from "../../hooks/getQuery.hook.js";
import { apiUrls } from "../../apis/urls";
import Meetings from "./meetings";
import Loader from "../../components/loader";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {addDaystoDate,subtractDaystoDate} from "../../helpers/datetimedays"

export default function Calender() {
  const { getQuery, loading, data = {} } = useGetQuery();
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();
  const navigate = useNavigate();

  
 
  /// Bishesh and Sanajana added ////////////-------- this function runs when user press next button
  function handleNext(){
    const nextdate = addDaystoDate(date,1);
    setDate(nextdate);
    console.log(nextdate);

    const formattedDate = moment(date).format("yyyy-MM-DD");
    
    getQuery({
      url: apiUrls.getMeetingsByHour + `?page_size=200&date=${formattedDate}`,
      // options: {
      //   headers: {
      //     email: "data@wynisco.com",
      //   },
      // },
    });



  }

  function handlePrevious(){
    const predate = subtractDaystoDate(date,1);
    setDate(predate);
    console.log(predate);

    const formattedDate = moment(date).format("yyyy-MM-DD");
    
    getQuery({
      url: apiUrls.getMeetingsByHour + `?page_size=200&date=${formattedDate}`,
      // options: {
      //   headers: {
      //     email: "data@wynisco.com",
      //   },
      // },
    });



  }
  
  
  useEffect(() => {
    const formattedDate = moment(date).format("yyyy-MM-DD");
    
    getQuery({
      url: apiUrls.getMeetingsByHour + `?page_size=200&date=${formattedDate}`,
      // options: {
      //   headers: {
      //     email: "data@wynisco.com",
      //   },
      // },
    });
    console.log(data);
    console.log(date);
  }, [date]);

  const styles = {
    table: {
      borderCollapse: "collapse",
    },
    cell: {
      border: "1px solid black",
    },
  };

  const Table = () => {
    const col = EMAIL_IDS.length + 1;
    const row = 24;

    const renderTableHeader = () => {
      const headers = ["Hour"];

      for (let i = 0; i < EMAIL_IDS.length; i++) {
        headers.push(EMAIL_IDS[i].email);
      }

      return headers.map((header, index) => (
        <th key={index} className="header-cell">
          {header}{" "}
          {index > 0 ? (
            <>
              {new Date(date).toISOString().split("T")[0] >=
              currentDate.toISOString().split("T")[0] ? (
                <a href={"/create-meeting/" + header} target="_blacnk">
                  Add
                </a>
              ) : null}
            </>
          ) : null}
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

            // if (displayHour > 12) {
            //   displayHour -= 12;
            // }

            cells.push(
              <td key={`col-${j}`} className="hour-cell">
                {`${displayHour}`}
              </td>
            );
          } else {
            // Render Demo Email ID cells
            // console.log(data, "datadatadata");
            const meetings = data[EMAIL_ID_STRING_ARRAY[j - 1]]
              ? data[EMAIL_ID_STRING_ARRAY[j - 1]][displayHour]
              : [];
            cells.push(
              <td key={`col-${j}`} style={styles.cell}>
                <Meetings meetings={meetings || []} />
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
    <div className="main-container">
      {loading ? <Loader /> : null}
      <div className="d-flex justify-content-between align-items-center mx-4 my-2">
        <div className="date-picker">
          <button class="btn btn-outline-secondary" onClick={()=>handlePrevious()}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <div>
            <DatePicker date={date} onChange={setDate} minDate={new Date()} />
          </div>
          <button class="btn btn-outline-secondary"  onClick={()=>handleNext()}>
            <i class="fa fa-angle-right" aria-hidden="true"  ></i>
          </button>
        </div>
        <div className="font-weight-bold h4">Zoom Ledger</div>
      </div>
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
}
