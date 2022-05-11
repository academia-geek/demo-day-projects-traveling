import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listGuiaAsync } from '../Redux/actions/guiasAction'
import '../styles/CSS/Guias.css'

const Guias = () => {

    const {guias} = useSelector((state) => state.guias)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(listGuiaAsync())
    }, [])
    

  return (
    <div>
      <div className="div-guias">
      {
            guias.map((element, index) => (
                <div key={index} className="subdiv-guias">
                <img style={{

                    border: "1px solid gray",
                }} src={element.imgGuia} className="img-guia" alt="imgGuia"/>

                <h1>{element.name}</h1>
                <h3><img src='https://res.cloudinary.com/travelingimg/image/upload/v1652286802/2258555_nq9bz1.png' className='icon-guia'/> {element.email}</h3>
                <h3><img src='https://res.cloudinary.com/travelingimg/image/upload/v1652286765/1151378_zydiud.png' className='icon-guia'/> {element.contacto}</h3>
                </div>
            ))
        }
      </div>

    </div>
  )
}

export default Guias