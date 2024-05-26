import React from "react";
import { Link } from "react-router-dom";

// Importing images
import AppImgA from "/src/assets/images/app/01.jpg";
import AppImgB from "/src/assets/images/app/02.jpg";

const btnText = "Sign up foR Free";
const title = "Shop Anywhere, Anywhere";
const desc =
  "Take shoping on your device with our app & learn all time what you want. Just download & install & start to learn";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      {/* Section header */}
      <div className="section-header text-center">
        <Link to="/sign-up" className="lab-btn mb-4">
          {btnText}
        </Link>
        <h2 className="title">{title}</h2>
        <p>{desc}</p>
      </div>
      {/* Section content */}
      <div className="section-wrapper">
        <ul className="lab-ul">
          <li>
            <a href="#">
              <img src={AppImgA} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={AppImgB} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppSection;
