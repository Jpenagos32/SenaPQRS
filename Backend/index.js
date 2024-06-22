import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { pqrsRouter } from './Router/pqrs.routes.js'
import { PqrsModel } from './Models/PqrsModel.js'

const PORT = process.env.PORT || 3001
const app = express()
const corsOptions = {
  origin: ['http://localhost:3000']
}

app.use(express.json())
app.use(cors(corsOptions))

// Enrutado
app.use('/pqrs', pqrsRouter({ pqrsModel: PqrsModel }))

// Respuesta predefinida para rutas no definidas
app.use((req, res) => {
  res.status(404).send(`
      <div style='display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 80px;'>
        <h1>404</h1>
        <p>Nothing in here</p>
      </div>
    `)
})

// Levantamiento del servidor
app.listen(PORT || 1234, () => {
  console.log(`Server raised in port ${PORT}`)
})
