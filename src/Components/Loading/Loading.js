import React from "react";
import StylesLoading from "./Loading.module.css";

function Loading() {
  return (
    <div className={StylesLoading.center}>
      <div className={StylesLoading.loader}></div>
    </div>
    
  );
}

export default Loading;
