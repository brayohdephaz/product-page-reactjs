import classes from "./App.module.css"; //We need to create a name so we may reference when calling the styles frome the modeule.css
import amazon from "./amazon.png"; // Importing an image from my local storage.
import ProductData from "./ProductData";

function App() {
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
    <div className="App">
      <header className="App-header">
        {/* CREATE A HEADING */}
        <nav className={classes.Topbar}>
          {/* Referencing a class from a module.css */}
          <img src={amazon} alt="" />
        </nav>
      </header>

      {/* CREATING THE PRODUCT PREVIEW CONTAINER */}
      <div className={classes.MainContainer}>
        {/* Column with the product preview */}
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product preview" />

          {/* We had a division that has content that displays in Heart and time in it */}
          {/* <div className={classes.TimeSection}>
            <p>{`${curretHour}:${curretMinute}`}</p>
          </div> */}

          <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
          {/* END in watch display */}
        </div>

        {/* CREATE A NEW Column THAT WILL HOLD THE PRODUCT DESCRIPTION */}
        <div className={classes.ProductData}>
          <h1>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>

          {/* COlor section */}
          <h3 className={classes.SectionHeading}>Select Color</h3>
          {/* Color image wrapper */}
          <div>
            {/* To add another class in our element image we have to put the classes in an array and use the join() method to convert them to string  */}
            <img
              className={[
                classes.ProductImage,
                classes.SelectedProductImage,
              ].join(" ")}
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
              className={[
                classes.FeatureItem,
                classes.SelectedFeatureItem,
              ].join(" ")}
            >
              Time
            </button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
          {/* End of features */}
        </div>
      </div>
    </div>
  );
}

export default App;
