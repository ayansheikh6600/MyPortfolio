import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500'>

        <div className='p-3 mx-auto w-[100%] lg:w-[60%] md:w-[80%] justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='text-white p-5 gap-4 flex flex-col items-center justify-center'>
                <h1 className='text-4xl  font-bold'>Logo</h1>
            </div>
            <div className='text-white p-5 gap-4 flex flex-col'>
                <div>
                    <h1 className='text-xl font-semibold'>About US</h1>
                </div>
                <div>
                    <p><span className='font-bold font-serif'>AS Developer</span>:  The MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, is a streamlined solution for full-stack web development.</p>
                </div>
            </div>
            <div className='text-white p-5 gap-4 flex flex-col'>
                <div>
                    <h1 className='text-xl font-semibold'>Follow US</h1>
                </div>
                <div>
                <ul className="flex gap-4 mt-4 text-3xl">
            <li className="hover:bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 inline-block cursor-pointer bg-clip-text hover:text-transparent">
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="hover:bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 inline-block cursor-pointer bg-clip-text hover:text-transparent">
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="hover:bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 inline-block cursor-pointer bg-clip-text hover:text-transparent">
              <a href="">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li className="hover:bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 inline-block cursor-pointer bg-clip-text hover:text-transparent">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Footer