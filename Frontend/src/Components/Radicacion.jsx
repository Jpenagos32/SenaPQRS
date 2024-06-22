import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';

const Radicacion = () => {
  const [show, setShow] = useState(false)

  const [formData, setFormData] = useState({
    tipo_peticion: '',
    correo: '',
    nombre_completo: '',
    tipo_identificacion: '',
    numero_identificacion: '',
    descripcion: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('/pqrs', formData)

    } catch (error) {
      console.error(error.message)
    }

    setShow(true)
    setFormData({
      tipo_peticion: '',
      correo: '',
      nombre_completo: '',
      tipo_identificacion: '',
      numero_identificacion: '',
      descripcion: ''
    })

  }

  const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)
  return (
    <div className="container">
      <h1 className="text-primary text-center">Radique su PQR</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='tipoPeticion'>
          <Form.Label>
            Tipo de petición
          </Form.Label>
          <Form.Select
            aria-label='Tipo de petición'
            name='tipo_peticion'
            required
            onChange={handleChange}
            value={formData.tipo_peticion}
          >
            <option value="" disabled>--Seleccione--</option>
            <option value="pregunta">Pregunta</option>
            <option value="queja">Queja</option>
            <option value="reclamo">Reclamo</option>
            <option value="sugerencia">Sugerencia</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>
            Indique su correo electronico
          </Form.Label>
          <Form.Control
            type='email'
            name='correo'
            required
            onChange={handleChange}
            value={formData.correo}
          />
        </Form.Group>

        <Form.Group controlId='nombre'>
          <Form.Label>
            Nombre Completo
          </Form.Label>
          <Form.Control
            type='text'
            required
            name='nombre_completo'
            onChange={handleChange}
            value={formData.nombre_completo}
          />
        </Form.Group>

        <Form.Group controlId='tipoIdentificacion'>
          <Form.Label>
            Tipo de identificación
          </Form.Label>
          <Form.Select
            aria-label='Tipo de identificacion'
            name='tipo_identificacion'
            onChange={handleChange}
            required
            value={formData.tipo_identificacion}
          >
            <option value="" disabled>--Seleccione--</option>
            <option value="cedula">Cedula de ciudadanía</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="nit">NIT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='numeroIdentificacion'>
          <Form.Label>
            Número de identificación
          </Form.Label>
          <Form.Control
            type='text'
            required
            name='numero_identificacion'
            onChange={handleChange}
            value={formData.numero_identificacion}
          />
        </Form.Group>

        <Form.Group controlId='descripcion'>
          <Form.Label>
            Diganos como podemos ayudarle:
          </Form.Label>
          <Form.Control
            as='textarea'
            rows={10}
            name='descripcion'
            onChange={handleChange}
            value={formData.descripcion}
          />

        </Form.Group>
        <Button className='mt-3' type='submit'>Enviar</Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Su solicitud ha sido enviada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Porfavor revise su correo electronico para obtener el número de radicado!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export { Radicacion };