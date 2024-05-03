import React, { useEffect,useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    // checks if the page is scrolled or not. if yes set the setSticky to true else return false
    const [sticky,setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY >50? setSticky(true) : setSticky(false);
        })
    })
    const [mobileMenu,setMobileMenu] =useState(false);
    const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false):setMobileMenu(true);
    }
    return (
    // removed the className dar-nav to add it dynamically making the navbar to be transparent at the top and in blue color when it is scrolled
    <nav className = {`container ${sticky ?'dark-nav':''}`}>
        <img src ={logo} alt = "" className ="logo" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to = 'hero' smooth ={true}offset={0} duration={500}>Home</Link></li>
            <li><Link to = 'programs' smooth ={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to = 'about' smooth ={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to = 'campus' smooth ={true}offset={-260} duration={500}>Campus</Link></li>
            <li><Link to = 'testimonials' smooth ={true}offset={-260} duration={500}>Testimony</Link></li>
            <li><Link to = 'contact' smooth ={true}offset={-260} duration={500} className = "btn">Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
