import React from 'react'
import { Menu, X} from 'lucide-react'
import Logo from '../Components/Logo.jsx'
import Navbar from './Navbar.jsx'
function Nav() {
  return (
<div className='w-full max-w-10xl mx-auto px-6 py-6 flex justify-between items-center z-40 border-b-2 shadow-2xl'>
  <Logo/>
  <Navbar/>
</div>
  )
}
export default Nav