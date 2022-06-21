import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.scss"


export default function Menu() {
  
  return (
    <div className='menu'>
        
        <nav>
         <Link to="setting">Setting</Link>
         <Link to="code">Show Code</Link>
         <Link to="about">About</Link>
         <Link to="contact">Contact</Link>
        </nav>
    </div>
  )
}
