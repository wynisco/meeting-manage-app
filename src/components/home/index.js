import * as React from "react";
import "./home.css";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import Data from "../data/index";

const row = [
  {
    id: 1,
    title: "Administrative Officer",
    desc: "Toxic effect of venom of wasps, undetermined",
    start: "6:34 AM",
    end: "2:10 AM",
  },
  {
    id: 2,
    title: "Database Administrator I",
    desc: "Pinta, unspecified",
    start: "8:27 AM",
    end: "11:40 PM",
  },
  {
    id: 3,
    title: "Systems Administrator II",
    desc: "Dislocation of MCP joint of right ring finger, init",
    start: "3:04 PM",
    end: "4:39 AM",
  },
  {
    id: 4,
    title: "Budget/Accounting Analyst IV",
    desc: "Unspecified open wound of right shoulder, initial encounter",
    start: "2:46 AM",
    end: "5:35 PM",
  },
  {
    id: 5,
    title: "Senior Developer",
    desc: "Unsp fx left femur, subs for opn fx type 3A/B/C w nonunion",
    start: "11:28 PM",
    end: "12:54 AM",
  },
  {
    id: 6,
    title: "Speech Pathologist",
    desc: "Disp fx of unsp tibial spine, subs for clos fx w delay heal",
    start: "12:39 AM",
    end: "12:31 PM",
  },
  {
    id: 7,
    title: "Design Engineer",
    desc: "Bilateral post-traumatic osteoarthritis of hip",
    start: "2:43 AM",
    end: "5:16 PM",
  },
  {
    id: 8,
    title: "Research Assistant II",
    desc: "Fall from heelies, sequela",
    start: "1:05 AM",
    end: "9:41 AM",
  },
  {
    id: 9,
    title: "Developer I",
    desc: "Burn of first degree of ",
    start: "3:37 PM",
    end: "6:26 PM",
  },
  {
    id: 10,
    title: "Actuary",
    desc: "Toxic effect of venom of other arthropod",
    start: "3:46 AM",
    end: "5:43 AM",
  },
];

export default function TableForm() {
  const navigate = useNavigate();

  const meetingCard = (row) => {
    return (
      <>
        <div class=" d-flex justify-content-start">
          <span class="font-weight-bold mr-1 text-wrap">Title: </span>
          {row.title}
        </div>
        <div class=" d-flex justify-content-start">
          <span class="font-weight-bold mr-1 text-wrap">Description:</span>
          {row.desc}
        </div>
        <div class=" d-flex justify-content-start">
          <span class="font-weight-bold mr-1 text-wrap">Start At: </span>
          {row.start}
        </div>
        <div class=" d-flex justify-content-start">
          <span class="font-weight-bold mr-1 text-wrap">End At: </span>
          {row.end}
        </div>
      </>
    );
  };

  const card = ({ id, email, meetings }) => {
    return (
      <>
        <div class="shadow" id={id}>
          <div>
            <div class=" d-flex h4 justify-content-start p-3 font-weight-bold">
              {email}
            </div>

            <div class="rounded-lg  p-4 p-xl-4 mb-4 position-relative overflow-hidden card-content">
              {meetings.length == 0 ? (
                <div class="card-content m-2 text-center" key={id}>
                  No Meetings
                </div>
              ) : (
                meetings.map((row, id) => {
                  return (
                    <div class="card-content shadow p-3 m-2 " key={id}>
                      {meetingCard(row)}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div class="create-account-btn">
        <button
          class="create-account"
          onClick={() => navigate("/create-meeting")}
        >
          CREATE ACCOUNT
        </button>
      </div>

      <div class="main-card-content">
        {Data.map((val, id) => {
          return <div key={id}>{card(val)}</div>;
        })}
      </div>
    </>
  );
}
