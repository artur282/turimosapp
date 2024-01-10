import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MyModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:p-0 rounded-xl">
                <div className="p-4 sm:p-7">
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Iniciar Sesión</h1>
                    <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      ¿Aún no tienes una cuenta?{" "}
                      <span className="font-medium hover:cursor-pointer text-emerald-600 decoration-2 hover:underline" href="#">
                        Registrate aquí
                      </span>
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-emerald-600 dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path
                          d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                          fill="#34A853"
                        />
                        <path
                          d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                          fill="#EB4335"
                        />
                      </svg>
                      Iniciar Sesión con Google
                    </button>

                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                      O
                    </div>

                    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid gap-y-4">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm dark:text-white">
                            Dirección de correo electrónico
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                              required
                              aria-describedby="email-error"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block mb-2 text-sm dark:text-white">
                              Contraseña
                            </label>
                            <a className="text-sm font-medium text-emerald-600 decoration-2 hover:underline" href="#">
                              ¿Has olvidado tu contraseña?
                            </a>
                          </div>
                          <div className="relative">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                              required
                              aria-describedby="password-error"
                            />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-emerald-600 pointer-events-none focus:ring-emerald-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-emerald-500 dark:checked:border-emerald-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="remember-me" className="text-sm dark:text-white">
                              Acuérdate de mí
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                          Acceder
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
