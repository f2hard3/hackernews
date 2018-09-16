import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

Button.defaultProps = {
  className: ""
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
