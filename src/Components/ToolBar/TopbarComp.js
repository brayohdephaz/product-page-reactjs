import React from "react";
import amazon from "../../Utilities/amazon.png"; // Importing an image from my local storage.
import classes from "./Topbar.module.css";

const TopbarComp = () => {
  return (
    <header className="App-header">
      {/* CREATE A HEADING */}
      <nav className={classes.Topbar}>
        {/* Referencing a class from a module.css */}
        <img src={amazon} alt="" />
      </nav>
    </header>
  );
};

export default TopbarComp;
