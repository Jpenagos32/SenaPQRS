import { Router } from 'express'
import { PqrsController } from '../Controllers/PqrsController.js'

export const pqrsRouter = ({ pqrsModel }) => {
  const pqrsRouter = Router()

  const pqrsController = new PqrsController({ pqrsModel })

  pqrsRouter.get('/', pqrsController.getPqrs)
  pqrsRouter.post('/', pqrsController.createPqrs)

  return pqrsRouter
}
