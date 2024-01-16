import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body, Header, Navbar } from './Components'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Education, Skills } from './Pages'


function App() {



  return (
    <>
    <Navbar/>
      <Header/>
      <Body/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>

      <div className='w-full h-[80px] flex justify-end items-center sticky bottom-0 right-0'>
        <div className='bg-blue-500 w-[60px] border-2 border-white rounded-xl h-[60px] mr-8'>
        <i className="fa-solid fa-arrow-up-long"></i>
        </div>
      </div>
      
      
    </>
  )
}

export default App
