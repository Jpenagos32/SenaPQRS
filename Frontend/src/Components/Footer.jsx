import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const Footer = () => {
  return (
    <div className="bg-primary pb-1 mt-4" data-bs-theme="dark">

      <CardGroup>
        <Card bg="primary" border="primary">
          <Card.Body>
            <Card.Title>HORARIOS DE ATENCIÓN</Card.Title>
            <Card.Subtitle className="text-bold">Atención al Cliente y Cajas:</Card.Subtitle>
            <Card.Text>
              Lunes a Viernes de 8:00am a 4:00pm. Jornada Continua
            </Card.Text>
            <Card.Subtitle>Sede Principal:</Card.Subtitle>
            <Card.Text>
              Calle 3 No 4-29 PBX (+57) 6028321000
            </Card.Text>

          </Card.Body>
        </Card>
        <Card bg="primary" border="primary">
          <Card.Body>
            <Card.Subtitle className='mb-2'>
              Acueducto y Alcantarillado de Popayán S.A E.S.P.
            </Card.Subtitle>
            <Card.Text className='mb-0'>
              NIT 891.500.117-1
            </Card.Text>
            <Card.Text className='mb-0'>
              NUIR 1-19001000-1 SSPD
            </Card.Text>
            <Card.Img variant="top" src="/images/IQnet_v23.png" style={{ width: '50px' }} />
            <Card.Img variant="top" src="/images/Icontec_v23.png" style={{ width: '50px' }} className='mb-0' />
            <Card.Text>
              &copy; Copyright 2024 - Todos los derechos reservados
            </Card.Text>

          </Card.Body>
        </Card>
      </CardGroup>

    </div >
  )
}
export { Footer };