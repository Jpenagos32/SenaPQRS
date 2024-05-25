import { CarouselAap } from "./Carousel";

const Landing = () => {
  return (
    <div className="text-center text-primary container">
      <h1>Acueducto y Alcantarillado de Popayán S.A E.S.P</h1>
      <img src="/images/logo_aapsa2.jpg" alt="" />
      <h2>Bienvenido al sistema de captacion de PQRS</h2>
      <CarouselAap />
    </div>
  )
}
export { Landing };