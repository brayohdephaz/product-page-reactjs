import React, { Component } from "react";

import classes from "./App.module.css"; //We need to create a name so we may reference when calling the styles from the modeule.css

import ProductData from "./ProductData";
import ProductPreview from "./ProductPreview";
import ProductDetailsComp from "./ProductDetailsComp";
import TopbarComp from "./TopbarComp";

// We will make use of state methods and therefore we will change our function to class
class App extends Component {
  state = {
    ProductData: ProductData, //We setting a new state and setting it to our object from  Product data
  };
  render() {
    return (
      <div className="App">
        {/* TOPBAR GOES HERE */}
        <TopbarComp />
        {/* END OF TOPBAR */}
        {/* CREATING THE PRODUCT PREVIEW CONTAINER */}
        <div className={classes.MainContainer}>
          {/* Product preview */}
          <div className={classes.ProductPreview}>
            <ProductPreview />
          </div>
          <div className={classes.ProductData}>
            <ProductDetailsComp data={this.state.ProductData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
