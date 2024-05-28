import { Registro } from "./Registro"

export const RegistroDiario = () => {
  return (
    <section className="registro-diario-container">
      <h2 className="text-white registro-h2">Registro Diario</h2>

      <Registro titulo={"calorias"} />
      <Registro titulo={"agua"} />
    </section>
  )
}
