import React from "react";

const Meetings = ({ meetings = [] }) => {
  return (
    <div>
      {meetings?.map((meet, i) => {
        return (
          <div
            style={{
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            {i + 1}. {meet?.topic}
          </div>
        );
      })}
    </div>
  );
};

export default Meetings;
