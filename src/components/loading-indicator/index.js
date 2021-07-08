import React from "react";
import "./loadingIndicator.css";
const LoadingIndicator = () => {
  return (
    <div>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
