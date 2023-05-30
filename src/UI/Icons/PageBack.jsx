import React, { useState } from "react";
import PropTypes from "prop-types";
const PageBack = ({ fill, hoverColor, onClick, size = 20 }) => {
  const [filled, setFilled] = useState(fill);
  const handleMouseEnter = () => {
    hoverColor && setFilled(hoverColor);
  };
  const handleMouseLeave = (e) => {
    setFilled(fill);
  };
  return (
    <svg
      style={{
        transition: "fill 0.4s",
        fill: filled,
        width: size,
        height: size,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      fill="#000000"
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 26.676 26.676"
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{
            transition: "fill 0.4s",
            fill: filled,
            pointerEvents: "none",
          }}
          onMouseEnter={(e) => {
            if (hoverColor) setFilled(hoverColor);
          }}
          onMouseLeave={(e) => {
            setFilled(fill);
          }}
          d="M26.105,21.891c0.229,00.4390.1310.5290.346l0,0c0.0660.1561.7163.8577.8854.59c1.2850.1562.8240.2364.6930.25v4.613c0,0.2130.115,0.4060.304,0.508c0.188,0.0980.413,0.0840.5880.033L0.254,13.815C0.094,13.708,0,13.528,0,13.339c00.191,0.0940.365,0.2540.477l11.8577.979c0.1750.121,0.3980.129,0.5880.029c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.2710.191,0.5080.459,0.562C26.18,21.891,26.141,21.891,26.105,21.891z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </g>
    </svg>
  );
};
PageBack.propTypes = {
  fill: PropTypes.string,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default PageBack;
