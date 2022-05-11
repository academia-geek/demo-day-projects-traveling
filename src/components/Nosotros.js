import React from "react";
import NavBar from "./NavBar";
import "../styles/CSS/Nosotros.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="div-info">
          <h1>Vive la aventura de tu vida con toda confianza y tranquilidad</h1>
          <h3>Quienes somos?</h3>
          <div className="subdiv-info">
            <div className="div-img-info">
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1651731201/8_y3zi6x.png"
                alt=""
              />
            </div>
            <div className="div-info-p">
              <p>
                Traveling es una plataforma que ofrece tanto a sus usuarios
                estandar como a sus ofertantes o anfitriones la oportunidad de
                compartir una experiencia unica con personas de diferentes
                partes del pais y especialmente en lugares rodeados de
                naturaleza para que estes libre del estres de la ciudad y
                descubras las maravillas de la cultura, flora, fauna,
                gastronomia y demas de nuestro hermoso pais
              </p>
              <p>
                En Traveling tambien nos preocupamos por que tengas el mejor
                servicio, desde los detalles mas minimos. Encontraras que todos
                nuestros hosperadores y anfitriones son antamente calificados a
                la hora de ofrecer los mejores servicio para sus y nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="div-imgs">
          <img
            src="https://res.cloudinary.com/travelingimg/image/upload/v1652250591/8_r3l0kk.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/travelingimg/image/upload/v1652250591/2_xopd3g.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/travelingimg/image/upload/v1652250590/5_wuwm2g.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/travelingimg/image/upload/v1652250590/7_vfgowt.png"
            alt=""
          />
        </div>

        <div className="div-final">
          <h1>Quieres ser parte de nosotros y de la experiencia Traveling?</h1>
          <img
            src="https://res.cloudinary.com/travelingimg/image/upload/v1652248701/anfitrion_jzfaig.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
