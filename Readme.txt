import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <h2>Portfolio.</h2>
        </div>
        <div className={style.menu}>
           <NavLink to="/" className={style.item}>Home</NavLink>
            <NavLink to="/about" className={style.item}>About</NavLink>
            <NavLink to="/service" className={style.item}>Service</NavLink>
            <NavLink to="/project" className={style.item}>Project</NavLink>
            <NavLink to="/contact" className={style.item}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar