import React from 'react'
import { Menu, X} from 'lucide-react'
import Logo from '../Components/Logo.jsx'
import Navbar from './Navbar.jsx'
function Nav() {
  return (
<div className='sticky top-0 z-20 mx-auto flex w-full items-center justify-between px-1' >
  <Logo/>
  <Navbar/>

</div>
  )
}
export default Nav