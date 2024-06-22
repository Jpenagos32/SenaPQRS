import { pqrsCollection, client } from '../Utils/MongoDB.js'
/**
 * Modelo encargado de conectarse a la base de datos
 */
export class PqrsModel {
  static async getAllPqrs () {
    try {
      await client.connect()
      const result = await pqrsCollection.find().toArray()

      return result
    } catch {
      throw new Error('Error Fetching data')
    } finally {
      client.close()
    }
  }

  /**
   * Metodo encargado de Crear un nuevo documento
   */
  static async newPqrs (data) {
    try {
      await client.connect()
      const result = await pqrsCollection.insertOne(data)

      return result
    } catch (error) {
      throw new Error('Error Inserting data')
    } finally {
      client.close()
    }
  }
}
