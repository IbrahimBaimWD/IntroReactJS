import React from "react";
import "./Component.css";

function Kotak(props) {
  return (
    <div className="Kotak">
      <p>{props.kotak}</p>
    </div>
  );
}
export default Kotak;
