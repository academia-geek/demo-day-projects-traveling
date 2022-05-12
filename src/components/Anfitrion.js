import React from 'react'
import '../styles/css/Anfitrion.css'


const Anfitrion = () => {

  return (
    <div>
    
        <div className="header-anfitrion">
            <div className="div-anfitrion">
                <a href="/"><img src="https://res.cloudinary.com/travelingimg/image/upload/v1651730227/bird_2_xhqowt.png" alt="" className="img-header-anfitrion" /></a> 
                <h1>Se parte de la experiencia de los demas y oferta tu lugar</h1>

                <a href='/login' className="btn-seanfitrion">Se anfitrion!</a>
            </div>
            <div className="img-anfitrion">
                <img src="https://res.cloudinary.com/travelingimg/image/upload/v1651732430/image_3_-_copia_fwsyd0.png" alt="" />
            </div>
        </div>

        <div>
            <div className="h1-servicio">
                <h1>Brinda los mejores opciones y servicios como anfitrio a tus residentes.</h1>
            </div>
            <div className="div-imgs-servicio">
                <div className="img-servicio">
                    <img src="https://res.cloudinary.com/travelingimg/image/upload/v1651731198/4_xqiqp5.png" alt="" />
                </div>
                <div className="img-servicio">
                    <img src="https://res.cloudinary.com/travelingimg/image/upload/v1651729766/1_nmpmxu.png" alt="" />
                </div>
                <div className="img-servicio">
                    <img src="https://res.cloudinary.com/travelingimg/image/upload/v1651729775/3_pjmpjf.png" alt="" />
                </div>
            </div>
        </div>

        <div className="div-se-anfitrion">
            <a href='/login'> <img src="https://res.cloudinary.com/travelingimg/image/upload/v1651736096/banner_fgs0kc.png" alt="" /></a>
        </div>

    
    </div>
  )
}

export default Anfitrion