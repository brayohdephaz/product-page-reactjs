import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  // We can declare two variables that adds a 0 on time if its below 9 and minutes too
  const curretHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const curretMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    // {/* Column with the product preview */}
    <div className={classes.ProductPreview}>
      <img src="https://imgur.com/iOeUBV7.png" alt="Product preview" />
      {/* /* We had a division that has content that displays in Heart and time in it */}
      <div className={classes.TimeSection}>
        <p>{`${curretHour}:${curretMinute}`}</p>
      </div>
      {/* 
      <div className={classes.HeartBeatSection}>
        <i class="fas fa-heartbeat"></i>
        <p>78</p>
      </div> */}
      {/* END in watch display */}
    </div>
  );
};

export default ProductPreview;
