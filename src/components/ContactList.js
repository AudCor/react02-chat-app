import React from "react";
import Contact from "./Contact";

const usersInfos = [
  {
    name: "Potté",
    avatar: "https://i.ibb.co/zfFHSVD/chat-potte.jpg",
    online: true,
  },
  {
    name: "Cheshire Cat",
    avatar: "https://i.ibb.co/RB7rygn/cheshire-cat.jpg",
    online: false,
  },
  {
    name: "Chi",
    avatar: "https://i.ibb.co/fvxc5x1/Chi.png",
    online: true,
  },
  {
    name: "Lucifer",
    avatar: "https://i.ibb.co/2gKJqCn/lucifer.jpg",
    online: true,
  },
  {
    name: "Raoul Chatigré",
    avatar: "https://i.ibb.co/xYkJv5J/Raoul-Chatigre.jpg",
    online: false,
  },
  {
    name: "Garfield",
    avatar: "https://i.ibb.co/QrZvPJf/proxy-duckduckgo-com.jpg",
    online: true,
  },
  {
    name: "Attila",
    avatar: "https://i.ibb.co/ZXDtqD2/attila.png",
    online: false,
  },
  {
    name: "Tom",
    avatar: "https://i.ibb.co/h2LTssM/tom.jpg",
    online: true,
  },
];

const ContactList = () => {
  return usersInfos.map(user => {
    return (
      <Contact name={user.name} avatar={user.avatar} online={user.online} />
    );
  });
};

export default ContactList;
