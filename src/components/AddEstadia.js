import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fileUpload } from '../helpers/fileUpload';
import { addEstadiaAsync } from '../Redux/actions/estadiaAction';

const AddEstadia = () => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      imagenes: [],
      descripcion: "",
      ubicacion: "",
      servicios: [],
      caracteristicas: [],
      categoria: "",
      maxPersonas: "",
      propietario: "",
      contacto: "",
    },
    onSubmit: (data) => {
      dispatch(addEstadiaAsync(data));
    },
  });

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        let array = formik.initialValues.imagenes;
        array.push(response);
        formik.initialValues.imagenes = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publicar Nueva Estadía</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group" onSubmit={formik.handleSubmit}>
            <input
              id="fileSelector"
              type="file"
              className="form-control "
              placeholder="url image"
              name="url"
              style={{ display: "none" }}
              onChange={handleFileChanged}
              required
            />

            <button
              className="btn btn-info"
              onClick={handlePictureClick}
              type="button"
            >
              Subir imagen
            </button>

            <input
              type="text"
              className="form-control mt-2"
              name="nombre"
              autoComplete="off"
              placeholder="Nombre"
              onChange={formik.handleChange}
              required
            />

            <input
              type="text"
              className="form-control mt-2"
              name="ubicacion"
              autoComplete="off"
              placeholder="Ubicación de la estadía"
              onChange={formik.handleChange}
              required
            />

            <textarea
              className="form-control mt-2"
              autoComplete="off"
              name="descripcion"
              placeholder="Descripción"
              onChange={formik.handleChange}
              required
            />

            <select name="categoria">
              <option value={"Cabaña"}>Cabaña</option>
              <option value={"Casa de campo"}>Casa de campo</option>
              <option value={"Casa vacacional"}>Casa vacacional</option>
              <option value={"Centro vacacional"}>Centro vacacional</option>
              <option value={"Hotel hacienda"}>Hotel hacienda</option>
            </select>

            <input
              className="form-control mt-2"
              autoComplete="off"
              name="servicios"
              placeholder="Servicios"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="precio"
              placeholder="Precio por noche"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="maxPersonas"
              placeholder="Máximo de personas"
              onChange={formik.handleChange}
              required
            />
            <textarea
              className="form-control mt-2"
              autoComplete="off"
              name="caracteristicas"
              placeholder="Caracteristicas"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="propietario"
              placeholder="Propietario"
              onChange={formik.handleChange}
              required
            />
            <input
              className="form-control mt-2"
              autoComplete="off"
              name="contacto"
              placeholder="Contacto del ofertante"
              onChange={formik.handleChange}
              required
            />

            <div className="d-grid gap-2 mx-auto mt-2">
              <Button type="submit" className="btn btn-outline-dark">
                Agregar
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddEstadia