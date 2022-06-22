import React from 'react'
import "./sidebar.scss"
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const go = useNavigate()
  return (
    <div className="side">
         <div className='heading' onClick={e=>go('/about')}>
            <h1>Matrix Rain Generator</h1>
            <h2>for create-react-app</h2>
        </div>

    </div>
  )
}
