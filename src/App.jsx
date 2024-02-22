import React from 'react'
 import { BrowserRouter,Route,Routes} from 'react-router-dom'

 import Footer from './components/Navbar/Footer'
 import Home from './components/Navbar/Home'
 import Navbar from './components/Navbar/Navbar'
import Register from './components/Pages/Register'
import Login from './components/Pages/Login'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
