import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listGuiaAsync } from '../Redux/actions/guiasAction'

const Guias = () => {

    const {guias} = useSelector((state) => state.guias)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(listGuiaAsync())
    }, [])
    

  return (
    <div>
        {
            guias.map((element, index) => (
                <div key={index}>
                <img style={{
                    width: "120px",
                    heigth: "120px",
                    borderRadius: "100px",
                    border: "1px solid gray",
                }} src={element.imgGuia} alt="imgGuia"/>

                <h1>{element.name}</h1>
                <h3>Correo: {element.email}</h3>
                <h3>Contactame: {element.contacto}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Guias