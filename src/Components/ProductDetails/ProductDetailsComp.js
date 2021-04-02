import React from "react";
import classes from "./ProductDetails.module.css";
// import ProductData from "./ProductData";

const ProductDetailsComp = (props) => {
  // Inside our data up we have color property that is passed as an array..so we can get the data by

  const colorOptions = props.data.colorOptions.map((item, pos) => {
    // We will declare a new variable that carries custom css for the product image
    const classArr = [classes.ProductImage];
    // The new variable classArr is appended when the key value is pos=== 0 .
    if (pos === props.currentImagePosition) {
      classArr.push(classes.SelectedProductImage);
    }

    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onColorOptionClick(pos)} //We create an anonymous function on the onclick method so it doesn't trigger the method outomatically
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem];
    // If pos is the first element
    if (pos === 0) {
      classArr.push(classes.SelectedFeatureItem);
    }
    return (
      <button key={pos} className={classArr.join(" ")}>
        {item}
      </button>
    );
  });
  return (
    /* CREATE A NEW Column THAT WILL HOLD THE PRODUCT DESCRIPTION */
    // We will use the props to call the data prop passed from the appjs inside the productDetails tag - passing data from parent component to child component

    <div className={classes.ProductData}>
      <h1>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      {/* COlor section */}
      <h3 className={classes.SectionHeading}>Select Color</h3>
      {/* Color image wrapper */}
      <div>
        {/* To add another class in our element image we have to put the classes in an array and use the join() method to convert them to string  */}
        {/* Calling the spitted data from the array */}
        {colorOptions}
      </div>
      {/* End of color image wrapper */}

      {/* Features */}
      <h3 className={classes.SectionHeading}>Features</h3>

      <div>{featureList}</div>

      <button className={classes.PrimaryButton}>Buy Now</button>
      {/* End of features */}
    </div>
    /* END OF PRODUCT DESCRIPTION */
  );
};

export default ProductDetailsComp;
