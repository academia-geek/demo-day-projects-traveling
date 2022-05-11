import React from "react";

import "../styles/CSS/Home.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div>
          <img
            src="https://res.cloudinary.com/dainl1ric/image/upload/v1651120998/bird_2_djvrbx.png"
            alt=""
            width="70px"
          />
        </div>
        <div className="div-social">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
            alt=""
            className="img-social"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
            alt=""
            className="img-social"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"
            alt=""
            className="img-social"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
