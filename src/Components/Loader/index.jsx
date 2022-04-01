import React from "react";

const Loader = () => {
  return (
    <div className="spinner-border text-primary" style={{'margin':'1rem'}} role="status">
      <span className="sr-only"></span>
    </div>
  );
};

export default Loader;
