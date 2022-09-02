import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import '../Footer/FooterModule.css'

export const Footer = () => {
  return (
    <footer className={`footer`}>
      <ul className={`social_list`}>
        <li className={`social_item`}><a target={`_blank`} href="https://www.instagram.com/h_celo/"><FaInstagram /></a></li>
        <li className={`social_item`}><a target={`_blank`} href="https://www.linkedin.com/in/devcelo/"><FaLinkedin /></a></li>
        <li className={`social_item`}><a target={`_blank`} href="https://api.whatsapp.com/send?phone=5573991619209"><FaWhatsapp /></a></li>
      </ul>
      <p className='copy_right'>
        <span className='span_footer'>Custos</span>&copy; 2022 by Marcelo H Silva
      </p>
    </footer>
  )
}
