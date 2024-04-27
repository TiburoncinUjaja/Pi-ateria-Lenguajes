import React from 'react'

const FormRegister = () => {
  return (
    <section className="bg-Beige w-1/2 dark:border dark:border-r-Azul-oscuro ">
        <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
            <div className="w-full bg-white -lg shadow">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-Azul-oscuro text-center">
                    ¡Regístrate aquí!
                    </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="nombre" className="block mb-2 text-sm font-semibold text-Azul-claro">Nombre completo</label>
                        <input type="text" name="nombre" id="nombre" className="bg-Beige border border-Azul-oscuro text-Azul-oscuro
                        sm:text-sm rounded-lg block w-full p-2.5" placeholder="nombre completo" required=""/>
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-Azul-claro">Correo:</label>
                        <input type="email" name="email" id="email" className="bg-Beige border border-Azul-oscuro text-Azul-oscuro
                        sm:text-sm rounded-lg block w-full p-2.5" placeholder="empresa@example.com" required=""/>
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-semibold text-Azul-claro">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••••" className="bg-Beige border border-Azul-oscuro text-Azul-oscuro
                        sm:text-sm rounded-lg block w-full p-2.5" required=""/>
                    </div>

                    <button type="submit" className="w-full text-white bg-Azul-oscuro hover:bg-Azul-claro
                     font-semibold rounded-lg text-sm px-5 py-2.5 text-cente">Registrarse</button>
                </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormRegister