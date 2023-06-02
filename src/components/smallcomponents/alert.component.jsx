import React from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ variant, msg }) => {
  return <Alert variant={variant}>{msg}</Alert>;
};

export default CustomAlert;
