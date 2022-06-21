import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import About from '../about/About';
import BackGround from '../backGround/BackGround'
import Contact from '../contact/Contact';
import Menu from '../menu/Menu';
import Setting from '../setting/Setting';
import ShowCode from '../showCode/ShowCode';

export default function Form() {
 

  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path='/' element= {<Setting />} />
        <Route path='/setting' element= {<Setting />} />
        <Route path='/code' element= {<ShowCode />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element= {<Contact />} />
        
        <Route path='*' element= {<BackGround />} />
      </Routes>

      <Menu/>
      
      
    </div>
  )
}
