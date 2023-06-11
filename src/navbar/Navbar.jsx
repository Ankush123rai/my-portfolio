import React, { useState } from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
const Navbar = () => {
  const [mobileView, setMobileView] = useState(false)
  return (
    <div className={style.container}>
      <NavLink to='/' className={style.logo}>ankush rai</NavLink>
    <div className={mobileView ? style.responsive:style.menu}>
    <div className={style.nav}>
      <NavLink to='/' className={style.item}>HOME</NavLink>
      <NavLink to='/about' className={style.item}>ABOUT</NavLink>
      <NavLink to='/project' className={style.item}>PROJECT</NavLink>
      <NavLink to='/contact' className={style.item}>CONTACT</NavLink>
    </div>
    </div>
      <FaHamburger className={style.close_btn}
        onClick={()=>setMobileView(!mobileView)}/>
          
        
        
    </div>
  )
}

export default Navbar