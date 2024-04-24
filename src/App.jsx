import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Flashcard from './components/Flashcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Bienvenido a mi piñatería :D
        <Flashcard/>
      </p>
    </>
  )
}

export default App
