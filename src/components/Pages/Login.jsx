import React from 'react'
import { Label, TextInput , Alert } from 'flowbite-react';
import { Link , useNavigate } from 'react-router-dom';
import { useState} from 'react'
function Login() {
  const [formData , setFormData]= useState({})
  const [errorMessage , setErrorMessage]= useState(null)
  
const navigate = useNavigate()
const handlechange=(e)=>{
  setFormData({...formData,[e.target.id]: e.target.value.trim() })
}
const  handleSubmit= async(e) =>{
  e.preventDefault()
  if ( !formData.email || !formData.password) {
    return setErrorMessage('Please fill out all fields.');
    }
   try {
     
     setErrorMessage(null)
       const res= await fetch('/api/auth/signin',{
         method :'POST',
         headers:{'Content-Type':'application/json'},
         body: JSON.stringify(formData)
     })
      const data = await res.json();
    if (data.success === false) {
      return setErrorMessage(data.message);
    }
    
    if(res.ok) {
      navigate('/home');
    }
  } catch (error) {
    setErrorMessage(error.message);
   
    }

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
            <Label value='Your email' />
            <TextInput type='text' placeholder='name@company.com' id='email' onChange={handlechange}  />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='text' placeholder='Password' id='password' onChange={handlechange} />
          </div>
          <button className='bg-cyan-800 h-10 rounded-lg text-white ' type='submit'>
          Login
          </button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span> Dont't Have an account?</span>
          <Link to='/register' className='text-blue-500'>
            register
          </Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
        )}
      </div>
    </div>
  </div>
 
  )
}

  

export default Login
