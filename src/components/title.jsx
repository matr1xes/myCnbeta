import React from "react";

const Title = ({ title }) => {
  return (
    <h4
      className="d-flex justify-content-between"
      style={{ textAlign: "left", margin: "10px 0 20px 0", color: "#036" }}
    >
      {title}
    </h4>
  );
};

export default Title;
