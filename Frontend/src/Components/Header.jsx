
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={'/'}>
          <img src="../../public/images/logo_aapsa2.jpg" alt="Logo acueducto" width='200px' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link' aria-current="page" to={'/pqrs'}>
                Radicar PQRS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contacto'}>Contacto</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
export { Header };