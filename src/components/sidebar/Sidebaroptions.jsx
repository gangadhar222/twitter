import React from "react";
import {IconContext} from "react-icons";
import "./sidebarOption.css";

export default function Sidebaroptions(props) {
  const { Icon, text } = props;
  return (
    <div className="sidebarOption">
    <IconContext.Provider value={{ className:"icon"}}>
        <Icon />
    </IconContext.Provider>
      <h2>{text}</h2>
    </div>
  );
}
