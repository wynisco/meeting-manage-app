import React from "react";

const Meetings = ({ meetings = [] }) => {
  return (
    <div style={{ paddingBottom: 30 }}>
      {meetings?.map((meet, i) => {
        return (
          <div
            style={{
              background: "#0070f3",
              color: "white",
              borderBottom: "2px solid white",
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              paddingRight: 10,
              paddingLeft: 10,
            }}
          >
            <div>{meet?.topic}</div>
            <div style={{ width: 70, textAlign: "right" }}>60 mins</div>
          </div>
        );
      })}
    </div>
  );
};

export default Meetings;
