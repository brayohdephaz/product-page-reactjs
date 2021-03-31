import React from "react";
import classes from "./ProductDetails.module.css";
import ProductData from "./ProductData";

const ProductDetailsComp = (props) => {
  return (
    /* CREATE A NEW Column THAT WILL HOLD THE PRODUCT DESCRIPTION */
    <div className={classes.ProductData}>
      <h1>{ProductData.title}</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>

      {/* COlor section */}
      <h3 className={classes.SectionHeading}>Select Color</h3>
      {/* Color image wrapper */}
      <div>
        {/* To add another class in our element image we have to put the classes in an array and use the join() method to convert them to string  */}
        <img
          className={[classes.ProductImage, classes.SelectedProductImage].join(
            " "
          )}
          src="https://imgur.com/iOeUBV7.png"
          alt="Black Color watch"
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/PTgQlim.png"
          alt="Red Color watch"
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/Mplj1YR.png"
          alt="Blue Color watch"
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/xSIK4M8.png"
          alt="Purple Color watch"
        />
      </div>
      {/* End of color image wrapper */}

      {/* Features */}
      <h3 className={classes.SectionHeading}>Features</h3>

      <div>
        <button
          className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
            " "
          )}
        >
          Time
        </button>
        <button className={classes.FeatureItem}>Heart Rate</button>
      </div>

      <button className={classes.PrimaryButton}>Buy Now</button>
      {/* End of features */}
    </div>
    /* END OF PRODUCT DESCRIPTION */
  );
};

export default ProductDetailsComp;
