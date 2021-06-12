import React from "react";
import "./contact.css";
import Status from "./Status";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    const toggleStatus = () => {
      const newStatus = !this.state.online;
      this.setState({ online: newStatus });
    };

    return (
      <div className="Contact">
        <div className="avatar">
          <img
            src={this.props.avatar}
            alt={this.props.name}
            className="avatarBox"
          />
        </div>
        <div className="infos">
          <h3 className="name"> {this.props.name} </h3>
          <Status online={this.state.online} toggleStatus={toggleStatus} />
        </div>
      </div>
    );
  }
}

export default Contact;
