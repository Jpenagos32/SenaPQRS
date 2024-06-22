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
  tipo_identificacion: z.enum(['cedula de ciudadania', 'pasaporte', 'nit']),
  numero_identificacion: z.string(),
  descripcion: z.string().min(20)
})

export function validatePutPqrs (object) {
  return putPqrsValidator.safeParse(object)
}
