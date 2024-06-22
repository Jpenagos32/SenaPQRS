import z from 'zod'

const putPqrsValidator = z.object({
  tipo_peticion: z.enum([
    'pregunta',
    'queja',
    'reclamo',
    'sugerencia'
  ]),
  correo: z.string().email(),
  nombre_completo: z.string().min(3).max(80),
  tipo_identificacion: z.enum(['cedula', 'pasaporte', 'nit']),
  numero_identificacion: z.string(),
  descripcion: z.string()
})

export function validatePutPqrs (object) {
  return putPqrsValidator.safeParse(object)
}
