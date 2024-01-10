import Ambiente from "../assets/undraw_explore.svg";
import { Link } from "react-router-dom";

const AmbienteComponent = () => {
  return (
    <div className="h-screen mt-20 snap-center snap-always">
      <section className="mb-48 sm:mb-0">
        <div className="flex flex-col items-center justify-center px-4 mx-auto text-center py6 sm:px-6 lg:px-8 lg:py-14">
          <h4 className="text-5xl font-bold text-transparent mt-14 bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
            Cuida el medio ambiente{" "}
          </h4>
          <img className="mt-8" src={Ambiente} alt="" width={300} />
          <div className="max-w-3xl mt-4">
            <p className="text-sm text-gray-800 sm:text-xl">
              Nuestra empresa esta comprometida en el apoyo y mantenimiento de los sitios turiscos para que puedas seguir viviendo nuevas
              experiencias y disfrutando de ellos
            </p>
          </div>
          <Link to={"/contacto"} className="px-6 py-2 mt-8 font-medium text-white rounded-md select-none bg-emerald-600 hover:bg-emerald-500">
            Contactanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AmbienteComponent;
