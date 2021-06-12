import React from "react";

const Status = (props) => {
  return (
    <div className="status" onClick={props.toggleStatus}>
      <div className={props.online ? "status-online" : "status-offline"} />
      <p className="status-text"> {props.online ? "online" : "offline"} </p>
    </div>
  );
};

export default Status;
