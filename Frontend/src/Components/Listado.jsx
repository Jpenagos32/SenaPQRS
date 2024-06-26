import Table from 'react-bootstrap/Table'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../App.css'

const Listado = () => {
  const tableStyles = {
    marginTop: '20px',
    height: '62.4vh'
  }
  const [pqrs, setPqrs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios('/pqrs')
      .then((data) => {
        if (data) {
          setPqrs(data.data)
          setLoading(false)
        }
      })
      .catch((error) => { console.error(error) })
  }, [])

  function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  

  return (
    <div style={tableStyles} className='container-fluid'>
      <h1 className="text-primary text-center">Listado de PQRS</h1>
      {
        loading ? (<div className='contenedor'><span className="loader"></span></div>) : (
          
          <Table striped hover variant='primary' bordered responsive>
            <thead>
              <tr>
                <th>Tipo Petición</th>
                <th>Descripcion</th>
                <th>Correo solicitante</th>
                <th>Tipo identificación solicitante</th>
                <th>Número identificación solicitante</th>
              </tr>
            </thead>
            <tbody>
              {
                pqrs?.map(pqr => (
                  <tr key={pqr._id}>
                    <td>{convertToTitleCase(pqr.tipo_peticion)}</td>
                    <td>{pqr.descripcion.slice(0, 50)}...</td>
                    <td>{pqr.correo}</td>
                    <td>{pqr.tipo_identificacion}</td>
                    <td>{pqr.numero_identificacion}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        )
      }
    </div>

  )
}
export { Listado };