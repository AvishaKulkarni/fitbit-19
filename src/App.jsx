import classes from "./App.module.css";
import ProductData from "./ProductData";

function App() {
  // const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' +
  // new Date().getHours();
  // const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' +
  // new Date().getMinutes();
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img
            src="data:image/png;base64,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"
            alt="Amazon Logo"
          />
        </nav>
      </header>
      <div
        className={classes.maincontainer}
        style={{ display: "flex", margin: "100px auto" }}
      >
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
          {/*<div className={classes.TimeSection}>
        <p>{`${currentHour}:${currentMinute}`}</p>
        </div>*/}
          <div className={classes.HeartBeatSection}>
            <i className="fa-solid fa-heart-pulse"></i>
            <p>78</p>
          </div>
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img
              className={[
                classes.ProductImage,
                classes.SelectedProductImage,
              ].join(" ")}
              src="https://imgur.com/iOeUBV7.png"
              alt="Black Colored Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/PTgQlim.png"
              alt="Red Colored Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/Mplj1YR.png"
              alt="Blue Colored Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/xSIK4M8.png"
              alt="Purple Colored Watch"
            />
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
