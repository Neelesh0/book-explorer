import React from "react";

const Loader = () => {
    const loaderStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
    };
  
    const spinnerStyle = {
      width: "50px",
      height: "50px",
      border: "5px solid #f3f3f3",
      borderTop: "5px solid #007bff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    };
  
    return (
      <div style={loaderStyle}>
        <div style={spinnerStyle}></div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  };
  
  export default Loader;
  