import React, { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router";
import Data from "../data/index";
import Apis from "../api/index";

export default function TableForm() {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [account, setAccount] = useState({});

  useEffect(() => {
    const listMeets = async () => {
      const data = await Apis.listMeets();
      setMeetings(data.meetings);
      setAccount(data);
    };

    listMeets();
  }, []);

  const meetingCard = (row) => {
    return (
      <>
        <div className=" d-flex justify-content-start">
          <span className="font-weight-bold mr-1 content-text">Topic: </span>
          {row.topic}
        </div>
        <div className=" d-flex justify-content-start">
          <span className="font-weight-bold mr-1 content-text">Duration:</span>
          {row.duration}
        </div>
        <div className=" d-flex justify-content-start">
          <span className="font-weight-bold mr-1 content-text">Start At: </span>
          {row.start_time}
        </div>
        <div className=" d-flex justify-content-start">
          <span className="font-weight-bold mr-1 content-text">Join Url: </span>
          <a href={row.join_url} target="_blank">
            {row.join_url}
          </a>
        </div>
      </>
    );
  };

  const card = ({ id, email }) => {
    return (
      <>
        <div className="shadow" id={id}>
          <div>
            <div className=" d-flex h4 justify-content-start p-3 font-weight-bold">
              {email}
            </div>

            <div className="rounded-lg  p-4 p-xl-4 mb-4 position-relative overflow-hidden card-content-parent">
              {meetings.length == 0 ? (
                <div className="card-content m-2 text-center" key={id}>
                  No Meetings
                </div>
              ) : (
                meetings.map((row, id) => {
                  return (
                    <div className="card-content shadow " key={id} id={row.id}>
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
      <div className="create-account-btn">
        <button
          className="create-account"
          onClick={() => navigate("/create-meeting")}
        >
          CREATE ACCOUNT
        </button>
      </div>

      <div className="main-card-content">
        {Data.map((val, id) => {
          return <div key={id}>{card(val)}</div>;
        })}
      </div>
    </>
  );
}
