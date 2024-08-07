import { Link } from '@radix-ui/themes';
import webDeveloperImage from '../assets/web_developer.svg';


export default function HomePage() {
  return (
    <div className="bg-gray-800 h-[720px] flex justify-between items-center py-2 md:py-10 px-5 md:px-20 xl:px-64  ">
      <section className="flex flex-col w-full md:w-1/2">
        <div>
          <div className="w-min">
            <p className="text-gray-300 font-semibold">Olá pessoas,</p>
            <h2 className="text-gray-200 capitalize font-bold text-4xl ">eu sou um desenvolvedor web</h2>
            <p className="text-gray-300 font-semibold">Seja bem-vindo ao meu portfólio website</p>
          </div>

        </div>

        <a href="/sobre" className="bg-gray-900 text-center text-white mt-20 rounded-sm font-semibold p-2 max-w-60">Saiba mais sobre mim</a>
      </section>

      <div className="h-full w-auto justify-center hidden md:flex">
        <img className="w-full lg:w-1/2" src={webDeveloperImage} alt="webDeveloperImage" />
      </div>

    </div>
  )
}
