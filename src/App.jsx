import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-Beige min-h-screen">
        <Header></Header>
        <section className='w-5/6 mx-auto px-8 pt-10'>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/quienessomos" element={<Inicio></Inicio>}></Route>
            <Route path="/contactenos" element={<Inicio></Inicio>}></Route>
            <Route path="/login" element={<Inicio></Inicio>}></Route>
            <Route path="/carrito" element={<Inicio></Inicio>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default App
