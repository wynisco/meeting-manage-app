import React from "react";
import "./home.css";

const Meeting = ({ meeting }) => {
  return (
    <>
      <div className=" d-flex justify-content-start">
        <span className="font-weight-bold mr-1 content-text">Topic: </span>
        {meeting.topic}
      </div>
      <div className=" d-flex justify-content-start">
        <span className="font-weight-bold mr-1 content-text">Duration:</span>
        {meeting.duration}
      </div>
      <div className=" d-flex justify-content-start">
        <span className="font-weight-bold mr-1 content-text">Start At: </span>
        {meeting.start_time}
      </div>
      <div className=" d-flex justify-content-start">
        <span className="font-weight-bold mr-1 content-text">Join Url: </span>
        <a href={meeting.join_url} target="_blank" rel="noreferrer">
          {meeting.join_url}
        </a>
      </div>
    </>
  );
};

export default Meeting;
