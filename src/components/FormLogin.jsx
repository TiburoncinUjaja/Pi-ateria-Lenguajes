import React from 'react'

const FormLogin = () => {
  return (
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-1/2">
      <div className="w-full shadow-lg rounded-2xl p-6 inline-block bg-gray-100 h-full">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-Azul-oscuro text-center">
                    ¡Inicia sesión aquí!
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Correo:</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-semibold text-Azul-oscuro">Contraseña</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-Azul-oscuro text-Azul-oscuro sm:text-sm rounded-lg block w-full p-2.5" required=""/>
                  </div>
                  <button type="submit" className="w-full text-white bg-Azul-oscuro font-semibold rounded-lg text-sm px-5 py-2.5 hover:text-Azul-oscuro hover:bg-Beige hover:border-Azul-oscuro border-2 text-center">Iniciar Sesión</button>
              </form>
          </div>
      </div>
  </div>
  )
}

export default FormLogin
