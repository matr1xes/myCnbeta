import React from "react";

const Summary = ({ summary }) => {
  return (
    <p className="mb-1" style={{ textAlign: "left", color: "#666" }}>
      {summary}
    </p>
  );
};

export default Summary;
