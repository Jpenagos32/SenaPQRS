import 'dotenv/config'
import { MongoClient } from 'mongodb'

// Crea la conexión a la DB de mongo
const { DB_URI } = process.env
export const client = new MongoClient(DB_URI)

// Define el nombre de la coleccion de mongo
export const pqrsCollection = client.db('SenaPQRS').collection('pqrs')
