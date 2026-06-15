import React from 'react'
import logo from '../src/assets/logo.webp'
import { Menu } from 'lucide-react'

const Logo = () => {
  return (
    <div className=' flex md:flex justify-between items-center'>
            <span className=' flex items-center'>
              <img className='h-10' src={logo} alt='Logo' />
              <p className='mt-2'><b>ANUPAMA</b><i>ENTERPRISES</i></p>
              </span>
    </div>
  )
}

export default Logo
