import React from 'react'
import { Label, TextInput } from 'flowbite-react';
import { Link , useNavigate } from 'react-router-dom';
import { useState} from 'react'
function Register() {


  const [formData , setFormData]= useState({})
const navigate = useNavigate()
const handlechange=(e)=>{
  setFormData({...formData,[e.target.id]: e.target.value })
}
const  handleSubmit= async(e) =>{
  e.preventDefault()

  const res= await fetch('/api/auth/signup',{
    method :'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  })
  .then(data=> console.log(data))

}
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
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' onChange={handlechange} />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='text' placeholder='name@company.com' id='email'  onChange={handlechange}/>
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='text' placeholder='Password' id='password'  onChange={handlechange} />
          </div>
          <button className='bg-cyan-800 h-10 rounded-lg text-white ' type='submit'>
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/login' className='text-blue-500'>
            login
          </Link>
        </div>
      </div>
    </div>
  </div>
 
  )
}

  

export default Register
