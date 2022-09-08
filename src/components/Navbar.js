import React from "react";

export default function Navbar(props) {
  return (
    <nav>
      <img
        src={require("../images/airbnb-logo.png")}
        alt=""
        className="nav--logo"
      />
    </nav>
  );
}
