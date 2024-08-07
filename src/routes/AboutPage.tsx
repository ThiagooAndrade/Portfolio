import thiagoImage from '../assets/thiagoImage.jpeg';


export default function AboutPage() {
  return (
    <div className="bg-gray-800 h-[600px] text-white">
      <section className="flex justify-center items-center gap-4 w-full h-full px-20">
        <div className="w-1/2 relative">
          <h2 className="font-semibold ">Olá! Eu me chamo Thiago Miguel de Luna Andrade, tenho 18 anos, ingressei na faculdade em 2023 e tive meu primeiro contato com programação a cerca de 1 ano, ainda não tive nenhuma experiência profissional, mas vou agarrar cada oportunidade.</h2>
          <div className="absolute top-60">
            <h2 className="font-medium text-lg">Tecnologias: </h2>
            <ul className="flex gap-4 mt-4 font-semibold">
              <li>
                ReactJs
              </li>
              <li>
                Java
              </li>
              <li>
                SpringBoot
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img className="w-80 rounded-2xl" src={thiagoImage} alt="foto de thiago" />
        </div>
      </section>

    </div>
  )
}
