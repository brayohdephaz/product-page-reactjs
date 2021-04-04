import React, { Component } from "react";

import classes from "./App.module.css"; //We need to create a name so we may reference when calling the styles from the modeule.css

import ProductData from "./Utilities/ProductData";
import ProductPreview from "./Components/ProductPreview/ProductPreview";
import ProductDetailsComp from "./Components/ProductDetails/ProductDetailsComp";
import TopbarComp from "./Components/ToolBar/TopbarComp";

// We will make use of state methods and therefore we will change our function to class
class App extends Component {
  state = {
    ProductData: ProductData, //We setting a new state and setting it to our object from  Product data
    // currentImagePriview: "https://imgur.com/PTgQlim.png", //Defined our image here at the state
    currentFeaturedList: 0,
    currentImagePosition: 0,
    curretHour:
      new Date().getHours() > 9
        ? new Date().getHours()
        : "0" + new Date().getHours(),
    curretMinute:
      new Date().getMinutes() > 9
        ? new Date().getMinutes()
        : "0" + new Date().getMinutes(),
  };

  // Creating a function that updates the current Image when selected color is clicked
  onColorOptionClick = (pos) => {
    this.setState({ currentImagePosition: pos });
  };
  onFeaturedListClick = (pos) => {
    this.setState({ currentFeaturedList: pos });
  };

  // We add a lifecycle method shouldComponentUpdate(nextProps, nextState) that checks a condition on the color picker current position and decides whether to rerender the component or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Inside rerender method");
    if (nextState.currentImagePosition === this.state.currentImagePosition) {
      return false;
    }
    return true;
  }

  render() {
    console.log("Rendering Appjs");
    return (
      <div className="App">
        {/* TOPBAR GOES HERE */}
        <TopbarComp />
        {/* END OF TOPBAR */}
        {/* CREATING THE PRODUCT PREVIEW CONTAINER */}
        <div className={classes.MainContainer}>
          {/* Product preview */}
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentImagePriview={
                this.state.ProductData.colorOptions[
                  this.state.currentImagePosition
                ].imageUrl
              }
              currentFeaturedList={this.state.currentFeaturedList}
              curretHour={this.state.curretHour}
              curretMinute={this.state.curretMinute}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetailsComp
              data={this.state.ProductData}
              onColorOptionClick={this.onColorOptionClick}
              currentImagePosition={this.state.currentImagePosition}
              currentFeaturedList={this.state.currentFeaturedList}
              onFeaturedListClick={this.onFeaturedListClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
