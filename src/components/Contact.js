import React from "react";
import "./contact.css";
import Status from './Status';

const Contact = (props) => {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar" />
      <div className="infos">
        <h3 className="name"> {props.name} </h3> 
        <Status online={props.online} />
      </div>
    </div>
  );
}

export default Contact;
