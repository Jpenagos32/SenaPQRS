import 'dotenv/config'
import { MongoClient } from 'mongodb'

const { DB_URI } = process.env

export const client = new MongoClient(DB_URI)

// Define el nombre de la coleccion de mongo
export const pqrsCollection = client.db('SenaPQRS').collection('pqrs')
