//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import './index.css'
import Header from './Components/header'
import InputForm from './Components/InputForm'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='mainContent'>
      <InputForm/>
    </div>
   
    </>
  )
}

export default App
