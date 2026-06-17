import { FaInstagram, FaLinkedin, FaTiktok, FaBars } from 'react-icons/fa'
import './App.css'
import logoImg from './assets/pronto-logo.png'
import './Navbar.css'



function Navbar() {
  return (
    <>
      <nav>
          <div className="nav-left">
            <a href="#about"><FaBars /></a> 
          </div>
          <div className="nav-center"> 
            <img src={logoImg} className="Logo"/>
          </div>
          <div className="nav-right">
            <a href="https://www.instagram.com/pronto_me/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/pronto-fashion-movement/?originalSubdomain=qa"><FaLinkedin /></a>
            <a href="https://www.tiktok.com/@pronto_me"><FaTiktok /></a>
          </div>
        </nav>
    </>
  )
}

export default Navbar