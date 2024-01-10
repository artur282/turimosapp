import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <section className="bg-white h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-emerald-600">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">La Pagina no existe.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lo sentimos, no podemos encontrar esa página. Encontrará mucho para explorar en la página de inicio.
            </p>
            <Link
              to={"/"}
              className="inline-flex text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
