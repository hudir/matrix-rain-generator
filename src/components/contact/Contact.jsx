import React from 'react'
import "./contact.scss"
import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../store/store'

export default function Contact() {
  const {setCurrentPage,submit, setSubmit} = useContext(Store);
  useEffect(()=>setCurrentPage('contact'),[])
  return (
    <form className='contact' onSubmit={e=>{e.preventDefault();setSubmit(true)}}>
     {!submit? (<>
      <h2>Contact Me</h2>

      <div className="formContainer">
        <label htmlFor="title">Title</label>
        <br />
        <input id='title' type="text" />
      </div>

      <div className="formContainer"> 
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id='name' />
        </div>

      <div className="formContainer">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" />
      </div>

      <div className="formContainer">
        <label htmlFor="msg">Message</label>
        <br />
        <textarea name="msg" id="msg" cols="30" rows="30" />
      </div>

      <button type='submit'>Submit</button></>) 
      : <h3>Thanks for your Message!  I'll get in touch with you asap.</h3> }
    </form>
  )
}
