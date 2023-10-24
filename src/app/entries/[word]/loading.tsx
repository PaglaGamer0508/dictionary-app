import React from "react";
import Styles from "./loading.module.css";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`${Styles.lds_roller}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loading;
