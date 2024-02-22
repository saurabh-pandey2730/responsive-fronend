import React from 'react'
 import { Footer } from 'flowbite-react'

 import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500 bg-black flex h-100 '>
    <div className='w-full max-w-7xl mx-auto'>
      <div className='grid w-full justify-between sm:flex md:grid-cols-1 lg:inline '>
        
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6' h-100>
          <div>
            <Footer.Title title='About' className='text-white font-semibold ' />
            <Footer.LinkGroup col className='text-white  '>
            <Footer.Link >Contact Us</Footer.Link>
            <Footer.Link >About us</Footer.Link>
            <Footer.Link >Career</Footer.Link>
              
            </Footer.LinkGroup >
          </div>
          <div>
            <Footer.Title title='Group Companies' className='text-white font-semibold ' />
            <Footer.LinkGroup col className='text-white  '>
              <Footer.Link  >Myntra</Footer.Link>
              <Footer.Link >FlipKart</Footer.Link>
              <Footer.Link >Shoupy</Footer.Link>
            </Footer.LinkGroup>
          </div>
           <div>
            <Footer.Title title='mail US' className='text-white font-semibold ' />
            <Footer.LinkGroup col className='text-white  '>
              <Footer.Link href='#'>Flipkart Internet</Footer.Link>
              <Footer.Link href='#'>xyz @gmail.com</Footer.Link>
              <Footer.Link href='#'>New Delhi</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className='w-full sm:flex sm:items-center sm:justify-between'>
      
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='#' icon={BsInstagram}/>
          <Footer.Icon href='#' icon={BsTwitter}/>
  

        </div>
      </div>
    </div>
  </Footer>
  )
}
