
// import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand >
          <Link to={'/'}>
            <img src="/images/logo_aapsa2.jpg" alt="logo acueducto" width={'200px'} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Item style={{ marginRight: 15 }}>
              <Link to={'/pqrs'} style={{ textDecoration: 'none' }}>
                Radicar PQRS
              </Link>
            </Nav.Item>
          </Nav>
          <Nav className="me-auto" >
            <Nav.Item style={{ marginRight: 15 }}>
              <Link to={'/list'} style={{ textDecoration: 'none' }}>
                listado PQRS
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export { Header };