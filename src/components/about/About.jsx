import React from 'react'
import {SiGithub,SiLinkedin} from 'react-icons/si'
import myPhoto from "../../store/myPhoto.jpeg"
import "./about.scss"

export default function About() {
  return (
    <div className='about'>
      <h1>Zhuo Yang</h1>
      <h3>Web Developer Student</h3>
      <img src={myPhoto} alt="" />

      <div className="cards">
        <div className="card">HTML</div>
        <div className="card">CSS</div>
        <div className="card">SCSS</div>
        <div className="card">Bootstrap</div>
        <div className="card">JavaScript</div>
        <div className="card">Vanilla JS</div>
        <div className="card">React</div>
      </div>

      <div className="link">
        <a href="https://github.com/hudir" target="_blank"><SiGithub/></a>
        <a href="https://www.linkedin.com/in/zhuo-yang-3881869b/" target="_blank"><SiLinkedin/></a>
      </div>

    </div>
  )
}
