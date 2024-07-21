// 구분선

import React from "react";
import './HorizontalLine.css';

const HorizonLine = ({ text }) => {
  return (
    <div className="HorizonLine">
      <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
    </div>
  );
};

export default HorizonLine;