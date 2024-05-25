import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

const Radicacion = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="container">
      <h1 className="text-primary text-center">Radique su PQR</h1>
      <Form>
        <Form.Group controlId='tipoPeticion'>
          <Form.Label>
            Tipo de petición
          </Form.Label>
          <Form.Select aria-label='Tipo de petición' required>
            <option value="" selected disabled>--Seleccione--</option>
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
          <Form.Control type='email' required />
        </Form.Group>

        <Form.Group controlId='nombre'>
          <Form.Label>
            Nombre Completo
          </Form.Label>
          <Form.Control type='text' required />
        </Form.Group>

        <Form.Group controlId='tipoIdentificacion'>
          <Form.Label>
            Tipo de identificación
          </Form.Label>
          <Form.Select aria-label='Tipo de identificacion' required>
            <option value="" selected disabled>--Seleccione--</option>
            <option value="cedula">Cedula de ciudadanía</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="NIT">NIT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='numeroIdentificacion'>
          <Form.Label>
            Número de identificación
          </Form.Label>
          <Form.Control type='number' required />
        </Form.Group>

        <Form.Group controlId='descripcion'>
          <Form.Label>
            Diganos como podemos ayudarle:
          </Form.Label>
          <Form.Control as='textarea' rows={10} />

        </Form.Group>
        <Button className='mt-3' type='submit' onClick={handleShow}>Enviar</Button>
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