import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body, Header, Navbar } from './Components'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Skills } from './Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<><Header/> <Body/> </>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<><h1>Education</h1> </>}/>
      </Routes>
      
      
    </>
  )
}

export default App
