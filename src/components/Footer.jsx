import React from 'react'
import '../assets/stylesheets/Footer.scss'
import logo from "../assets/icons/Derigo_logo_Redesign.svg";


const Footer = () => {
  return (
    <footer className='footer'>
        <img className="footer__logo" src={logo} alt="Logo de la empresa DeRigo Refrigeration" />
        <ul className='footer__info'>
            <li>
                <span>DeRigo Refrigeration Argentina | <a href='mailto: info@derigoargetina.com.ar' target='_blank' rel='noreferrer'>info@derigoargetina.com.ar</a></span>
            </li>
            <li>
                <span>Copyright © 2022 derigoargentina.com.ar | Todos los derechos reservados</span>
            </li>
        </ul>
    </footer>
  )
}

export default Footer