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
                    <p>CodingNepal is a blog dedicated to providing <br /> valuable and informative content about web development technologies <br />such as HTML, CSS, JavaScript, and PHP...</p>
                </div>
            </div>
            <div className='text-white p-5 gap-4 flex flex-col'>
                <div>
                    <h1 className='text-xl font-semibold'>Follow US</h1>
                </div>
                <div>
                    <ul className='flex justify-around'>
                        <li>fb</li>
                        <li>insta</li>
                        <li>github</li>
                        <li>link</li>
                    </ul>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Footer