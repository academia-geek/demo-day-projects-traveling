import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listEstadiaAsync } from '../Redux/actions/estadiaAction';
import '../styles/css/ListarEstadias.css'

const ListarEstadias = () => {
  const { estadias } = useSelector((state) => state.estadias)
  const dispatch = useDispatch();

  console.log(estadias)

  useEffect(() => {
    dispatch(listEstadiaAsync())
  }, [])

  return (
    <div>
      <div>
        <Container className="container-product">
          <div className="card-columns">
            {
              estadias.map((element, index) => (
                <Link
                  className="link-card"
                  key={index}
                  to={`/estadia/${element.id}`}
                >
                  <Card
                    className="car-cont mt-3"
                    style={{ width: "25rem", height: "27rem" }}
                  >
                    <Card.Img className="imgCard" src={element.imagenes[0]} />
                    <Card.Body>
                      <Card.Title className="nombre">{element.nombre}</Card.Title>
                      <label>{element.calificacion}</label>
                      <label>{element.ubicacion}</label>
                      <div className="container-price">
                        <h3 className="preciotext">
                          <span>COP $</span>
                          {element.precio}
                        </h3>
                        <Card.Text className="entrega">Lugar Disponible</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              ))
            }
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ListarEstadias