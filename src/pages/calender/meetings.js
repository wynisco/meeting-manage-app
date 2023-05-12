import React from "react";

const Meetings = ({ meetings = [] }) => {
  return (
    <div>
      {meetings?.map((meet) => {
        return <div>{meet?.topic}</div>;
      })}
    </div>
  );
};

export default Meetings;
