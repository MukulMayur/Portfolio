import React from "react";

const Preloader = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Preloader;
