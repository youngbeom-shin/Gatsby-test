import React from "react";

const FrenchIcon = ({ fill = "#7D7D7D", ...props }) => (
  <svg
    width="32"
    height="24"
    viewBox="0 0 32.6 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.2,13.1L9,10.1l-4-4C4.8,5.8,4.8,5.4,5,5.2l3.8-3.9c0.1-0.1,0.3-0.2,0.4-0.2L28.7,0c0.1,0,0.2,0,0.3,0.1l3.1,1.3
    c0.3,0.1,0.5,0.4,0.4,0.7l-0.5,2.7C32,4.9,32,5,31.9,5.1L23.2,13.1z"
    fill={fill}/>
  <path d="M23.5,14.1l4.1,4.2c0.2,0.3,0.2,0.7,0,0.9l-3.7,3.9c-0.1,0.1-0.3,0.2-0.5,0.2L3.9,24h0c-0.1,0-0.1,0-0.2,0L0.5,23
    c-0.3-0.1-0.5-0.4-0.5-0.8l0.6-3c0-0.1,0.1-0.3,0.2-0.4l8.5-7.8L23.5,14.1z"
    fill={fill}/>

  </svg>
);

export default FrenchIcon;
