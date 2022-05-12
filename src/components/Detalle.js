import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteEstadia, listEstadiaAsync } from '../Redux/actions/estadiaAction';
import ListarEstadias from './ListarEstadias';
import '../styles/CSS/Detalle.css'
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import { Icon } from 'leaflet';
import EditarEstadia from './EditarEstadia';

export const Detalle = () => {
  const { estadias } = useSelector((state) => state.estadias);

  const navigate = useNavigate();

  const [detailEstadia, setDetailEstadia] = useState([]);
  const [position, setPosition] = useState(undefined);

  const [images, setImages] = useState({
    imageMain: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const editar = (id) => {
    const getEstadia = estadias.find((p) => p.id === id);
    setModal(true);
    setEnviarDatosModal(getEstadia);
  };

  useEffect(() => {
    if (estadias) {

      const filterEstadia = estadias.find((product) => product.id === id);
      console.log(filterEstadia)
      if (filterEstadia !== undefined) {
        setDetailEstadia(filterEstadia);
        setImages({
          imageMain: filterEstadia.imagenes[0],
          image1: filterEstadia.imagenes[1],
          image2: filterEstadia.imagenes[2],
          image3: filterEstadia.imagenes[3],
        });
        setPosition({
          latitude: filterEstadia.latitude,
          longitud: filterEstadia.longitud
        });

      }
    }

    dispatch(listEstadiaAsync());

  }, []);

  const iconMark = new Icon({
    iconUrl: 'https://www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png',
    iconSize: [50, 50],
    inconAnchor: [30, 60]
  })

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>

      <div style={{marginTop: "25px"}}>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{margin: "auto", width: "90%"}} >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carusel"
          src={images.imageMain}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 img-carusel"
          src={images.image1}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="d-block w-100 img-carusel"
          src={images.image2}
          alt="Third slide"
        /> 

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
      <div className="div-main-detalle">
          <div>
            <h2 className="fs-5 fw-bold">{detailEstadia.nombre}</h2>
            <h4 className="stylBlue">
              <span>Ubicación: </span>
              {detailEstadia.ubicacion}
            </h4>

            <p>
              <span>Precio:</span>{" "}
              <span className="precio">${detailEstadia.precio}</span>
              <span>COP Noche</span>
            </p>

            <hr />

            <p>
              <span>{detailEstadia.descripcion}</span>
            </p>
          </div>
        

        <div className="div-servicio">
          <h3>Servicios</h3>

          <div className="div-icons-servicio">
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652152004/2460762_vo0spj.png"
                className="icon-servicio"
              />
              <p>Dormitorios</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652152050/2460781_oemq4w.png"
                className="icon-servicio"
              />
              <p>Baños</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652151915/857681_eoie5m.png"
                className="icon-servicio"
              />
              <p>Cocina</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652151862/93158_zxu3cp.png"
                className="icon-servicio"
              />
              <p>Wifi</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652152908/2804212_gobsly.png"
                className="icon-servicio"
              />
              <p>Parqueadero</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652152126/2460768_u9rrjh.png"
                className="icon-servicio"
              />
              <p>TV</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652152250/2838912_ql1cpp.png"
                className="icon-servicio"
              />
              <p>GPS</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652153122/4671557_u56qfe.png"
                className="icon-servicio"
              />
              <p>Guia</p>
            </div>
          </div>
          <hr />
          <div className="div-main-anfitrion">
            {/*<p className="">{detailEstadia.servicios}</p>*/}

            <h3>Máximo de personas</h3>
            <div className="div-max-personas">
              <img
                src="https://res.cloudinary.com/travelingimg/image/upload/v1652154128/3439380_gleey4.png"
                className="icon-max-person"
              />
              <p>{detailEstadia.maxPersonas}</p>
            </div>
            <hr />
            <div className="div-reservas">
              <div>
                <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652158008/2460737_oqkdgr.png" />
                <h3>Reserva</h3>
              </div>
              <div className="div-fechas">
                <div>
                  <label>Fecha de llegada</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Fecha de salida</label>
                  <input type="date" />
                </div>
              </div>
            </div>

            <hr />
            <div className="div-anfitrion">
              <div>
                <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652156422/7440832_iebbfe.png" />
              </div>
              <div>
                <h3>Anfitrion</h3>
                <p>{detailEstadia.propietario}</p>
                <p>{detailEstadia.contacto}</p>
              </div>
              <div className="div-btns">
                <Button className="btn-editar"
                onClick={() => editar(detailEstadia.id)}>Editar</Button>
                <Button
                  onClick={() => {
                    Swal.fire({
                      title: '¿Desea eliminar?',
                      showDenyButton: true,
                      denyButtonText: `Borrar`,
                      confirmButtonText: 'Cancel',
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isDenied) {

                        dispatch(deleteEstadia(detailEstadia.id));

                        Swal.fire({
                          icon: "success",
                          title: "Eliminado con exito",
                          showConfirmButton: true,
                          timer: 1500,
                        });
                        navigate("/");
                      }
                    })
                    
                  }}
                  className="btn-delete"
                  variant="danger"
                >
                  Eliminar
                </Button>
              </div>
            </div>
                  {modal === true ? <EditarEstadia modal={enviarDatosModal} /> : ""}
            <hr />
            <MapContainer
              center={position === undefined ? [3.513, -73.147] : [position.latitude, position.longitud]}
              zoom={5}
              style={{ width: '100%', height: '60vh' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=HvfR5qlnf4PcQQdtIgi1"
              />
              {position !== undefined ? <Marker position={[position.latitude, position.longitud]} icon={iconMark}></Marker> : null}
            </MapContainer>

          </div>

        </div>
      </div>

      <h2 className="ms-5">Otras Estadias que podrias visitar</h2>
      <ListarEstadias />
    </div>
  );
};
