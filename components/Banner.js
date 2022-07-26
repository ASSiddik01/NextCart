import React from "react";
import styles from "../styles/Banner.module.css";

import banner1 from "../images/banner/banner_1.jpg";
import banner2 from "../images/banner/banner_2.jpg";

const Banner = () => {
  return (
    <div>
      <div className={`hero min-h-screen ${styles.banner}`}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Next Cart</h1>
            <p className="mb-5">
              <b>NextCart</b> is a specialist online retailer of stylish, high
              quality and well-priced products sourced from around the world.{" "}
              <b>A BRAND YOU CAN TRUST.</b>
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
