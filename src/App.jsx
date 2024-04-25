import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Bienvenido a mi piñatería :D
      </p>
      <Footer />
    </>
  )
}

export default App
