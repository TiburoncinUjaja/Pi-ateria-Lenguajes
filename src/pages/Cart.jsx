import React from 'react'
import { useState, useEffect  } from 'react';

const Cart = () => {
    const [numeros, setNumeros] = useState([1, 1, 1]);
    const [precios, setprecios] = useState([15.0, 20.5, 10.2]);

    const disminuirContador = (indice) => {
        if (numeros[indice] != 1){
            const nuevosNumeros = [...numeros];
            nuevosNumeros[indice] -= 1;
            setNumeros(nuevosNumeros);
            
        }
    };

    const incrementarContador = (indice) => {
        const nuevosNumeros = [...numeros];
        nuevosNumeros[indice] += 1;
        setNumeros(nuevosNumeros);
        console.log(numeros)
    };

    const subTotal = numeros.reduce((total, num, idx) => {
        return total + (num * precios[idx]);
    }, 0)

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Carrito
                </h2>
                <div className="hidden lg:grid grid-cols-2 py-6">
                    <div className="font-normal text-xl leading-8 text-gray-500">Producto</div>
                    <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">

                        <span className="w-full max-w-[260px] text-center">Cantidad</span>
                        <span className="w-full max-w-[200px] text-center">Total</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                    <div
                        className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <div className="img-box"><img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image" className="xl:w-[140px]" /></div>
                        <div className="pro-data w-full max-w-sm ">
                            <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Latest N-5
                                Perfuam
                            </h5>
                            <p
                                className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                Perfumes</p>
                            <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${precios[0]}</h6>
                        </div>
                    </div>
                    <div
                        className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                        <div className="flex items-center w-full mx-auto justify-center">
                            <button
                                className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => disminuirContador(0)}>
                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                            </button>
                            <input type="text"
                                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                placeholder={numeros[0]} />
                            <button
                                className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"onClick={() => incrementarContador(0)}>
                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <h6
                            className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                             ${((precios[0] * numeros[0])).toFixed(2)}</h6>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                    <div
                        className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <div className="img-box"><img src="https://pagedone.io/asset/uploads/1701162866.png" alt="perfume bottle image" className="xl:w-[140px]" /></div>
                        <div className="pro-data w-full max-w-sm ">
                            <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Musk Rose Cooper
                            </h5>
                            <p
                                className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                Perfumes</p>
                            <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${precios[1]}</h6>
                        </div>
                    </div>
                    <div
                        className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">

                        <div className="flex items-center w-full mx-auto justify-center">
                            <button
                                className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => disminuirContador(1)}>
                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                            </button>
                            <input type="text"
                                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                placeholder={numeros[1]} />
                            <button
                                className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"onClick={() => incrementarContador(1)}>
                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <h6
                            className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                            ${((precios[1] * numeros[1])).toFixed(2)}</h6>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                    <div
                        className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <div className="img-box"><img src="https://pagedone.io/asset/uploads/1701162880.png" alt="perfume bottle image" className="xl:w-[140px]" /></div>
                        <div className="pro-data w-full max-w-sm ">
                            <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Dusk Dark Hue
                            </h5>
                            <p
                                className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                Perfumes</p>
                            <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${precios[2]}</h6>
                        </div>
                    </div>
                    <div
                        className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">

                        <div className="flex items-center w-full mx-auto justify-center">
                            <button
                                className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => disminuirContador(2)}>
                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                            </button>
                            <input type="text"
                                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                placeholder={numeros[2]} />
                            <button
                                className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => incrementarContador(2)}>
                                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    fill="none">
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <h6
                            className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                            ${((precios[2] * numeros[2])).toFixed(2)}</h6>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">${numeros.reduce((total, num, idx) => {
    return total + (num * precios[idx]);
}, 0)}</h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">Free</h6>
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${subTotal}</h6>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                    <button
                        className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Pagar
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                            fill="none">
                            <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Cart
