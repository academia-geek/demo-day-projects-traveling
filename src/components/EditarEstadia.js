import { useForm } from "../hooks/useForm";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editAsync } from "../Redux/actions/estadiaAction";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const EditarEstadia = ({ modal }) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false);
    const navigate = useNavigate();

    const [values, handleInputChange, reset] = useForm({
        nombre: modal.nombre,
        img1: modal.imagenes[0],
        img2: modal.imagenes[1],
        img3: modal.imagenes[2],
        descripcion: modal.descripcion,
        ubicacion: modal.ubicacion,
        servicios: modal.servicios,
        categoria: modal.categoria,
        precio: modal.precio,
        maxPersonas: modal.maxPersonas,
        propietario: modal.propietario,
        contacto: modal.contacto,
        latitude: modal.latitude,
        longitud: modal.longitud
    })
    const {
        nombre,
        img1,
        img2,
        img3,
        descripcion,
        ubicacion,
        servicios,
        precio,
        maxPersonas,
        propietario,
        contacto,
    } = values

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editAsync(modal.id, values));
        navigate("/home");
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Esta Estadía</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control
                                type="text"
                                name="ubicacion"
                                value={ubicacion}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descripcion</Form.Label>
                            <textarea
                                type="text"
                                name="descripcion"
                                value={descripcion}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Servicios</Form.Label>
                            <Form.Control
                                type="text"
                                name="servicios"
                                value={servicios}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Precio por noche</Form.Label>
                            <Form.Control
                                type="text"
                                name="precio"
                                value={precio}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Máximo de personas</Form.Label>
                            <Form.Control
                                type="text"
                                name="maxPersonas"
                                value={maxPersonas}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Propietario</Form.Label>
                            <Form.Control
                                type="text"
                                name="propietario"
                                value={propietario}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>contacto</Form.Label>
                            <Form.Control
                                type="text"
                                name="contacto"
                                value={contacto}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="image" src={img1} name="img1" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="image" src={img2} name="img2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="image" src={img3} name="img3" />
                        </Form.Group>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleClose();
                                        
                                    }}
                                    type="submit"
                                    variant="primary"
                                >
                                    Save Changes
                                </Button>
                            </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default EditarEstadia
