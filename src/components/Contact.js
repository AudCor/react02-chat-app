import React from "react";
import "./contact.css";

const Status = (props) => {
  return (
    <div className="status">
      <div className={props.online ? "status-online" : "status-offline"} />
      <p className="status-text"> {props.online ? "online" : "offline"} </p>
    </div>
  );
}
const Contact = (props) => {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar" />
      <div>
        <h1> {props.name} </h1> 
        <Status online={props.online} />
      </div>
    </div>
  );
}

export default Contact;
