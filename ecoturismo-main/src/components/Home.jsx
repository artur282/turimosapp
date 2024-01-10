import { useState, lazy, Suspense } from "react";

const ModalLogin = lazy(() => import("./ModalLogin"));

export default function Home({ MoreInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 mb-4 text-center align-middle basis-3/5 sm:mb-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:pt-6">Descubre grandes lugares</h1>
          <p className="mt-6 text-2xl font-bold leading-8 text-white sm:text-3xl ">
            Encuentra el lugar perfecto para pasear un rato, en tu ciudad
          </p>
        </div>
        <div className="inline-flex items-center justify-center gap-4 mt-48 md:text-end md:basis-2/5">
          <button
            onClick={() => MoreInfo()}
            className="px-6 py-2 font-medium text-gray-800 rounded-md select-none bg-white/80 hover:bg-white"
          >
            Mas información
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="px-10 py-2 font-medium text-gray-800 rounded-md select-none bg-white/80 hover:bg-white"
          >
            Comenzar
          </button>
        </div>
      </div>
      <Suspense>
        <ModalLogin isOpen={isOpen} setIsOpen={setIsOpen} />
      </Suspense>
    </>
  );
}
