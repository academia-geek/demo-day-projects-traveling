import React from 'react'
import NavBar from './NavBar'
import ListarEstadias from './ListarEstadias'
import '../styles/CSS/Home.css'

const Home = () => {

  return (
    <div>
        <NavBar/>
        <main>
        <div>
            <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652242717/paisaje3_rhzxx8.jpg" alt="" class="banner-nav" />
        </div>
        <div class="div-info-1">
            <div>
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651109091/Captura_p7mznq.png" alt="" class="img-info-1"/>
            </div>
            <div class="div-info-1-descripcion">
                <h1>No tengas miedo a descubrir el mundo!</h1>
                <h3>Encuentra muchos lugares maravillosos en medio de la naturaleza y desconectate del estres de la ciudad!</h3>
                <button class="btn-vamos">Vamos!</button>
            </div>
        </div>

        <div class="seccions">
            <div class="seccion-img">
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651109571/mujernegra_q1xasm.jpg" alt=""/>
                <h3>Cultura</h3>
            </div>
            <div class="seccion-img">
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651110566/comida_rnpz1o.jpg" alt=""/>
                <h3>Gastronomia</h3>
            </div>
            <div class="seccion-img">
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651111181/Captura2_iwu7mn.png" alt=""/>
                <h3>Flora</h3>
            </div>
            <div class="seccion-img">
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651110564/oso_ufcbvc.jpg" alt=""/>
                <h3>Fauna</h3>
            </div>
        </div>

        <div class="div-publica">
            <div class="subdiv-publica campista">
                <div class="subdiv-img">
                    <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651114891/parte23_lcxi5g.png" alt="" class="img-campista"/>
                </div>
                <div class="subdiv-btn">
                    <h2>No sabes donde ir?</h2>
                    <button>
                        Descubre!
                    </button>
                </div>
            </div>
            
            <div class="subdiv-publica hospedador">
                <div class="subdiv-img">
                    <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651114910/parte1_tkcncb.png" alt="" class="img-campista"/>
                </div>
                <div class="subdiv-btn">
                    <h2>Publica tu lugar para que otros tengan donde llegar!</h2>
                    <button>
                        Publica!
                    </button>
                </div>
            </div>
        </div>

        <div class="div-testimonios">
            <div class="testimonio">
                <div class="img-testimonio">
                    <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651116001/mujer-sonriendo-foto-freepik_kfwzao.jpg" alt="" class="img-feliz"/>
                </div>
                <div class="info-testimonio">
                    <p>Los paisaje de mi pais no tienen comparacion alguna</p>
                </div>
            </div>
            <div class="testimonio">
                <div class="img-testimonio">
                    <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651116000/hikers-and-campers_rtugpt.jpg" alt="" class="img-feliz"/>
                </div>
                <div class="info-testimonio">
                    <p>No conocia las maravillas que tiene Colombia hasta que comence a recorrela</p>
                </div>
            </div>
        </div>

        <div class="div-destinos">
            <div>
                <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652235136/1_nsvxuk.png" alt=""/>

            </div>
            <div>
                <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652235137/4_rmnwro.png" alt=""/>

            </div>
            <div>
                <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652235180/3_xxtscg.png" alt=""/>
            </div>
        </div>
    </main>

    </div>
  )
}

export default Home