export class PqrsController {
  constructor ({ pqrsModel }) {
    this.pqrsModel = pqrsModel
  }

  /**
   * Funcion encargada de responder con los datos de pqrs
   */
  getPqrs = async (req, res) => {
    try {
      const result = await this.pqrsModel.getAllPqrs()
      res.status(200).json(result)
    } catch {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  createPqrs = async (req, res) => {
    const data = {
      tipo_peticion: 'Probando Más',
      correo: 'correo3@correo.com',
      nombre_completo: 'Julian Andres Penagos 2',
      tipo_identificacion: 'Cedula de ciudadania',
      numero_identificacion: 1061804790,
      descripcion: 'tengo problemas de alcantarillado, como puedo solucionarlos? nuevo'
    }

    try {
      const result = await this.pqrsModel.newPqrs(data)
      res.json({ message: `Se creo correctamente con el id ${result.insertedId}` })
    } catch (error) {
      res.status(500).json({ error: 'Error creating' })
      console.log(error)
    }
  }
}
