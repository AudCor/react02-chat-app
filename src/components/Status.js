import React from 'react';

const Status = (props) => {
  return (
    <div className="status">
      <div className={props.online ? "status-online" : "status-offline"} />
      <p className="status-text"> {props.online ? "online" : "offline"} </p>
    </div>
  );
}

export default Status;