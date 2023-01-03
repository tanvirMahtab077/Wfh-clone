import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="h-screen text-white relative">
      <div className='flex flex-col justify-center items-center h-full p-3 text-center'>
        <span className='text-9xl font-bold'>404</span>
        <span className='text-2xl'>PAGE NOT FOUND</span>
        <p className='text-lg'>
          The page requested couldn't be found.
          This could be a spelling error
          in the URL or a removed page.
        </p>
        <Link to="/" className='bg-slate-50 duration-500 ease-in-out hover:text-white hover:bg-[#62615e] text-black py-3 px-5 rounded-full mt-20'>
          Back to Homepage
        </Link>
      </div>
      <img className='absolute brightness-50 top-0 w-full h-full z-[-1] object-cover' src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
    </div>
  )
}

export default NotFound