import React from "react";
import StylesLoading from "./Loading.module.css";

function Loading() {
  return (
    <div className={StylesLoading.loadingContainer}>
      <div className={StylesLoading.loadingBox}>
        <div className={StylesLoading.loadingItem}></div>
      </div>
    </div>
  );
}

export default Loading;
