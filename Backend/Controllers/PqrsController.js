import { validatePutPqrs } from '../Utils/Validators/pqrsValidator.js'

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
    const data = validatePutPqrs(req.body)
    if (data.error) {
      return res.status(400).json(data.error.issues)
    }

    try {
      const result = await this.pqrsModel.newPqrs(data.data)
      res.status(200).json({ message: `Se creo correctamente con el id ${result.insertedId}` })
    } catch (error) {
      res.status(500).json({ error: error.message })
      console.log(error)
    }
  }
}
