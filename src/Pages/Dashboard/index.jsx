import React from 'react'
import { Navigate } from 'react-router-dom'

const DashBoard = () => {
    const loggedin = localStorage.getItem("both")
    console.log(loggedin);
  return !loggedin ? ( <Navigate to='/'/> ) : ( <>
    <div className='w-full h-dvh flex flex-col justify-center'>
        <div className='w-[90%] mx-auto bg-[#5271FF] py-10  rounded-2xl'>
            <h1 className='text-4xl text-center text-white font-semibold'>Add Project</h1>
        <form action="" className=' w-[500px] flex flex-col gap-2 bg-white mx-auto p-4 py-14 rounded-3xl mt-4'>
                <label htmlFor="">Title:</label>
                <input className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]' type="text" name="" id="" placeholder='Enter Email' />
                <label htmlFor="">Decription:</label>
                <textarea className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]'  name="" id="" placeholder='Enter Password' /> 
                <label htmlFor="">Live Link:</label>
                <input className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]' type="text" name="" id="" placeholder='Enter Email' />
                <label htmlFor="">Repo Link:</label>
                <input className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]' type="text" name="" id="" placeholder='Enter Email' />
                <label htmlFor="">Image:</label>
                <input className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]' type="file" name="" id="" placeholder='Enter Email' />
                <button className='w-full bg-[#5271FF] text-white font-bold p-2 mt-3 rounded-lg'>Login</button>

            </form>
        </div>
    </div>
    </>
  )
}

export default DashBoard