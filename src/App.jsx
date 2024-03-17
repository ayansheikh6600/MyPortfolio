import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body, Footer, Header, Navbar } from './Components'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, DashBoard, Education, Login, Projects, Skills } from './Pages'
import AOS from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

AOS.init({
  duration : 800
});


function App() {

  function scrollToTop() {
    // Get the current scroll position
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Check if the scroll position is not already at the top
    if (currentScroll > 0) {
        // Animate the scroll to the top
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 10); // You can adjust the animation speed by changing the divisor
    }
}





  return (
   <Routes>
    <Route path='/' element={
       <>
       <div>

       <Navbar/>
         <Header/>
         <Body/>
         <About/>
         <Skills/>
         <Education/>
         {/* <Contact/> */}
         <Footer/>
         <div className='w-full h-[80px] flex justify-end items-center fixed bottom-0 right-0'>
           <div className='bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 w-[60px] border-2 border-white rounded-xl h-[60px] flex justify-center items-center text-xl font-semibold cursor-pointer mr-8 text-white' onClick={()=>scrollToTop()}>
           Top
           </div>
         </div>
       </div>
   
         
         
         
       </>
    } />
    <Route path='/allprojects' element={<Projects/>}/>
   </Routes>
  )
}

export default App
