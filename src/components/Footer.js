import React from "react";
import "../styles/css/Home.css";

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
          <p>Traveling 2022</p>
        </div>
        <div className="div-contactos">
          <h3>Contacto</h3>
          <p><img src="https://res.cloudinary.com/travelingimg/image/upload/v1652320526/email_pgsj64.png" className="icon-contacto" />traveling@gmail.com</p>
          <p><img src="https://res.cloudinary.com/travelingimg/image/upload/v1652320522/phone_ms7wom.png" className="icon-contacto" />+57 3003214567</p>

        </div>
        <div className="div-contactos">
        <h3>Desarrolladores</h3>
          <p>Kevin Torres</p>
          <p>Brahian Alzate</p>
          <p>Steven Gonzalez</p>
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
