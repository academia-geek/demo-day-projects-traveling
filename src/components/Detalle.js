import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteEstadia, listEstadiaAsync } from '../Redux/actions/estadiaAction';
import ListarEstadias from './ListarEstadias';
import NavBar from './NavBar';
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import { Icon } from 'leaflet';

export const Detalle = () => {
  const { estadias } = useSelector((state) => state.estadias);

  const navigate = useNavigate();

  const [detailEstadia, setDetailEstadia] = useState([]);

  const [images, setImages] = useState({
    imageMain: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEstadiaAsync());
    const filterEstadia = estadias.find((product) => product.id === id);
    if (filterEstadia !== undefined) {
      setDetailEstadia(filterEstadia);
      setImages({
        imageMain: filterEstadia.imagenes[0],
        image1: filterEstadia.imagenes[1],
        image2: filterEstadia.imagenes[2],
        image3: filterEstadia.imagenes[3],
      });
    }
  }, []);

  const iconMark = new Icon({
    iconUrl: 'https://www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png',
    iconSize: [50, 50],
    inconAnchor: [30, 60]
  })

  return (
    <div>
      <NavBar />
      <Container className="container-detail my-5">
        <Row>
          <Col xs={1} className="col-img">
            <button className="mt-4">
              <img className="imgSecund" src={images.image1} alt="img1" />
            </button>
            <br />
            <button className="mt-4">
              <img className="imgSecund" src={images.image2} alt="img2" />
            </button>
            <br />
            <button className="mt-4">
              <img className="imgSecund" src={images.image3} alt="img3" />
            </button>
          </Col>
          <Col className="mt-5">

            <img src={images.imageMain} alt="imgprincipal" />

          </Col>
          <Col>
            <h2 className="fs-5 fw-bold">{detailEstadia.nombre}</h2>
            <h4 className="stylBlue">
              <span>Ubicación: </span>
              {detailEstadia.ubicacion}
            </h4>

            <p>
              <span>Precio:</span>{" "}
              <span className="precio">$ {detailEstadia.precio}</span>
            </p>

            <hr />

            <p>
              <span>{detailEstadia.descripcion}</span>
            </p>
            <span>Servicios</span>
            <span className="fw-bold ms-2">{detailEstadia.servicios}</span>
            <br />
            <span>Máximo de Personas</span>
            <span className="fw-bold ms-2">{detailEstadia.maxPersonas}</span>
            <hr />
            <ul>
              <h3>Ofertante</h3>
              <span>{detailEstadia.propietario}</span>
              <span>{detailEstadia.contacto}</span>
              {/* <li>- {descripcion.descr1}</li> */}
            </ul>
            <MapContainer
              center={detailEstadia.latitude === undefined ? [0, 0] :[detailEstadia.latitude, detailEstadia.longitud]}
              zoom={10}
              style={{ width: '100vh', height: '100vh' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=HvfR5qlnf4PcQQdtIgi1"
              />
              <Marker position={detailEstadia.latitude === undefined ? [0, 0] :[detailEstadia.latitude, detailEstadia.longitud]} icon={iconMark}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>

            {
              // detailEstadia !== [] ?
              //   <MapContainer
              //     center={[detailEstadia.latitude, detailEstadia.longitud]}
              //     zoom={10}
              //     style={{ width: '50vh', height: '50vh' }}
              //   >
              //     <TileLayer
              //       attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              //       url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=HvfR5qlnf4PcQQdtIgi1"
              //     />
              //     <Marker position={[detailEstadia.latitude, detailEstadia.longitud]} icon={iconMark}>
              //       <Popup>
              //         A pretty CSS3 popup. <br /> Easily customizable.
              //       </Popup>
              //     </Marker>
              //   </MapContainer>
              //   : null
          }
          </Col>
          <Col xs lg="2">
            <div>
              <Button
              // className="w-100"
              // variant="warning"
              // onClick={() => editar(detailEstadia.id)}
              >
                Editar
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteEstadia(detailEstadia.id));
                  Swal.fire({
                    icon: "success",
                    title: "Eliminado con exito",
                    showConfirmButton: true,
                    timer: 1500,
                  });
                  navigate("/");
                }}
                className="w-100 mt-2"
                variant="danger"
              >
                Eliminar
              </Button>
            </div>

          </Col>
        </Row>
        {/* {modal === true ? <Editar modal={enviarDatosModal} /> : ""} */}
      </Container>
      <h2 className="ms-5">Otras Estadias que podrias visitar</h2>
      <ListarEstadias />
    </div>
  );
};
