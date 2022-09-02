import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../../img/logo_custos.png'
import '../Navbar/NavbarModule.css'
import { Container } from '../container/Container'

export const Navbar = () => {
  const[bar, setBar] = useState('')
  let active = 'active'

  const closeNavBar = () => {
    setBar('')
  }

  return (
    <nav className={`navbar`}>
      <div className="container">
        <Link to={"/"}>
          <img className={`logo`} src={logo} alt="" />
        </Link>
        <div className={`container_list`}>
          <ul className={`list ${bar}`}>
            <li className={`item`}><Link onClick={closeNavBar} to={"/"}>Home</Link></li>
            <li className={`item`}><Link onClick={closeNavBar} to={"/projects"}>Projects</Link></li>
            <li className={`item`}><Link onClick={closeNavBar} to={"/company"}>About</Link></li>
            <li className={`item`}><Link onClick={closeNavBar} to={"/contact"}>Contact</Link></li>

            <div id='closeBar'>
              <FaTimes className='closeBar' onClick={() => setBar("")} />
            </div>
          </ul>

          <div id='openBar'>
            <FaBars className='openBar' onClick={() => setBar("active")} />
          </div>
        </div>  
      </div>
    </nav>
  )
}
