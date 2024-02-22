import React from 'react'
import { Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Welcome
          </span>
          
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project of ecommerce. You can sign up with your email and password
          
        </p>
      </div>
      {/* right */}

      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
         
          <div>
            <Label value='Your email' />
            <TextInput type='text' placeholder='name@company.com' id='email' />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='text' placeholder='Password' id='password' />
          </div>
          <button className='bg-cyan-800 h-10 rounded-lg text-white ' type='submit'>
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span> Dont't Have an account?</span>
          <Link to='/register' className='text-blue-500'>
            register
          </Link>
        </div>
      </div>
    </div>
  </div>
 
  )
}

  

export default Login
