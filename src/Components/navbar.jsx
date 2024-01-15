import React from 'react'
import './navbar.css'
import Logo from '../extraFiles/Logo.png'
import arrp from '../extraFiles/arr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect} from 'react'

const Navbar = () => {
    
        const [isMenuVisible, setIsMenuVisible] = useState(false);
      
        const toggleMenu = () => {
          setIsMenuVisible(!isMenuVisible);
        };
      
        const hideMenuOnScroll = () => {
          if (isMenuVisible) {
            setIsMenuVisible(false);
          }
        };
        useEffect(() => {
            window.addEventListener('scroll', hideMenuOnScroll);
        
            return () => {
              window.removeEventListener('scroll', hideMenuOnScroll);
            };
          }, [isMenuVisible]);

  return (
    <div className='navbar-header' onScroll={hideMenuOnScroll}>
        <div className="logo-container">
            <img src={Logo} alt="GFT"/>
        </div>
        <input type="checkbox"  id="check" />
        <label htmlFor="check" className='checkbtn'> <FontAwesomeIcon icon={faBars} onClick={toggleMenu} onScroll={hideMenuOnScroll}/></label>
        <nav className='Main-nav'>
            <ul className={`Main-nav-list ${isMenuVisible ? 'vis1' : ''}`} onScroll={hideMenuOnScroll}>
                <li className={`${isMenuVisible ? 'vis12' : ''}`}><a href="#">Home</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>

        <div className={`HeaderButton-Container ${isMenuVisible ? 'vis2' : ''}`}>
            <button className={`nav-button ${isMenuVisible ? 'vis22' : ''}`}><img src={arrp} alt=""/>  Get Funded</button>
        </div>
        
    </div>
  )
}

export default Navbar