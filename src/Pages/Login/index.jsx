import React from 'react'

const Login = () => {
  return (
    <div className='w-full bg-[#5271FF] h-dvh'>
        <div  className='w-[90%]   mx-auto flex flex-col h-full justify-center'>
            <h1 className='text-4xl text-center text-white font-semibold'>
                Login
            </h1>
            <form action="" className=' w-[500px] flex flex-col bg-white mx-auto p-4 py-14 rounded-3xl mt-4'>
                <label htmlFor="">Email:</label> <br />
                <input className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]' type="email" name="" id="" placeholder='Enter Email' /> <br />
                <label htmlFor="">Passowrd:</label> <br />
                <input className='w-full p-2 text-black rounded-lg border-2 border-[#5271FF]' type="password" name="" id="" placeholder='Enter Password' /> <br />
                <button className='w-full bg-blue-500 p-2 mt-3 rounded-lg'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login