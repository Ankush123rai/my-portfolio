import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={style.container}>
    <div className={style.logo}>
      PORTFOLIO
    </div>
    <div className={style.menu}>
      <NavLink to='/' className={style.item}>HOME</NavLink>
      <NavLink to='/about' className={style.item}>ABOUT</NavLink>
      <NavLink to='/project' className={style.item}>PROJECT</NavLink>
      <NavLink to='/contact' className={style.item}>CONTACT</NavLink>
    </div>

    </div>
  )
}

export default Navbar