import Monumeto from "../assets/Monumento_Natural.webp";
import Monumento2 from "../assets/Monumento2.png";
import Monumento3 from "../assets/castrero.jpg";
import SanJuan from "../assets/sanJuan.jpg";
import { HiOutlineStar } from "react-icons/hi2";

const Destacados = ({ refScroll }) => {
  return (
    <div ref={refScroll} className="snap-center snap-always">
      <section className="pt-16 mb-8 sm:h-screen">
        <div className="px-6 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
          <div className="inline-flex items-center gap-1">
            <HiOutlineStar className="w-10 h-10 text-yellow-400 fill-yellow-300" />
            <h3 className="text-3xl font-bold text-gray-800 sm:text-4xl">Lugares Destacados</h3>
          </div>
          <p className="text-gray-500 mb-14 ">Estos son los lugares mas visitados y recomendados por nuestros clientes</p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="">
              <a className="relative block overflow-hidden group rounded-xl" href="#">
                <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                  <img
                    className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 h-80 rounded-xl"
                    src={Monumeto}
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="px-4 py-2 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Los Morros
                  </div>
                </div>
              </a>
            </div>

            <div className="">
              <a className="relative block overflow-hidden group rounded-xl" href="#">
                <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                  <img
                    className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 h-80 rounded-xl"
                    src={Monumento2}
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="px-4 py-2 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-lg dark:bg-gray-800 dark:text-gray-200">
                    Mirador Teobaldo Mieres
                  </div>
                </div>
              </a>
            </div>

            <div className="">
              <a className="relative block overflow-hidden group rounded-xl" href="#">
                <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                  <img
                    className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 h-80 rounded-xl"
                    src={SanJuan}
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="px-4 py-2 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-lg dark:bg-gray-800 dark:text-gray-200">
                    Monumento a San Juan Bautista
                  </div>
                </div>
              </a>
            </div>

            <div className="">
              <a className="relative block overflow-hidden group rounded-xl" href="#">
                <div className="overflow-hidden aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl">
                  <img
                    className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105 h-80 rounded-xl"
                    src={Monumento3}
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="px-4 py-2 text-sm font-bold text-gray-800 bg-white rounded-lg md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    El Castrero
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destacados;
