import classes from "./App.module.css"; //We need to create a name so we may reference when calling the styles from the modeule.css

import ProductData from "./ProductData";
import ProductPreview from "./ProductPreview";
import ProductDetailsComp from "./ProductDetailsComp";
import TopbarComp from "./TopbarComp";

function App() {
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
          <ProductDetailsComp />
        </div>
      </div>
    </div>
  );
}

export default App;
