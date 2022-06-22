import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Store from '../../store/store'
import "./menu.scss"


export default function Menu() {
  const {currentPage} = useContext(Store)
  
  return (
    <div className='menu'>
        
        <nav>
         <Link className={currentPage==="setting" ? "activ" : ""} to="setting">Setting</Link>
         <Link className={currentPage==="code" ? "activ" : ""} to="code">Show Code</Link>
         <Link className={currentPage==="about" ? "activ" : ""} to="about">About</Link>
         <Link className={currentPage==="contact" ? "activ" : ""} to="contact">Contact</Link>
         <br />
         <small>&copy; 2022, Zhuo Yang</small>
        </nav>
        
    </div>
  )
}
