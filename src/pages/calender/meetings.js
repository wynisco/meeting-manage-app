import React from "react";
import "./meeting.css";

const Meetings = ({ meetings = [] }) => {
  return (
    <div style={{ paddingBottom: 30 }}>
      {meetings?.map((meet, i) => {
        return (
          <div>
            <div className="meetings_cell">
              <div className="meetings_cell_inside">
                <div>{meet?.topic}</div>
                <div style={{ width: 70, textAlign: "right" }}>
                  {`${meet?.duration} mins`}
                </div>
              </div>
              <span className="hide_details">
                <span>{meet?.topic}</span>
                <br></br>
                <span>{`Time: ${meet?.duration} minutes`}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meetings;
