import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listGuiaAsync } from '../Redux/actions/guiasAction'
import '../styles/css/Guias.css'

const Guias = () => {

    const {guias} = useSelector((state) => state.guias)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(listGuiaAsync())
    }, [])
    

  return (
    <div>

      <div className='div-guias'>
          {
            guias.map((element, index) => (
            <div key={index} className="card">
            <div className="blob"><br/></div>
              <span className="img">
              <img src={element.imgGuia} className="img" alt="imgGuia"/>
              </span>
              <div>
                  <h2><br/><span>{element.name}</span></h2>
              </div>
              <div>
                  <p>{element.name}</p>
                  <p><img src='https://res.cloudinary.com/travelingimg/image/upload/v1652320526/email_pgsj64.png' className='icon-guia' alt=""/> {element.email}</p>
                  <p><img src='https://res.cloudinary.com/travelingimg/image/upload/v1652320522/phone_ms7wom.png' className='icon-guia' alt=""/> {element.contacto}</p>
              </div>
            </div>

        ))
        }
    </div>
    </div>
  )
}

export default Guias