import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  // We can declare two variables that adds a 0 on time if its below 9 and minutes too

  return (
    // {/* Column with the product preview */}
    <div className={classes.ProductPreview}>
      <img src={props.currentImagePriview} alt="Product preview" />
      {/* /* We had a division that has content that displays in Heart and time in it
      We will render the two under a condation
       */}

      {props.showHeartBeat === true ? (
        <div className={classes.HeartBeatSection}>
          <i className="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${props.curretHour}:${props.curretMinute}`}</p>
        </div>
      )}

      {/* END in watch display */}
    </div>
  );
};

export default ProductPreview;
