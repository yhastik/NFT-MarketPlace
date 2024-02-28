import React from 'react'
import User from './img/User.svg'
import Logo from './img/Logo.svg'
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <>
    <header className='header'>
        <div className="header-logo">
            <img src={ Logo } alt="logo"/>
            NFT Marketplace        
        </div>
        <ul className="header-nav-items">
            <Link to='/' className='Link'><li className="header-nav-item">Marketplace</li></Link>
            <Link to='/Rankings'className='Link'><li className="header-nav-item">Rankings</li></Link>
            <Link to='/ConnectAwallet'className='Link'><li className="header-nav-item">Connect a wallet</li></Link>
            <Link to='/SignUp'className='Link-button'><li className="header-nav-item header-nav-item-button"><img src={ User } alt="User-button"/>Sign Up</li></Link>
        </ul>
    </header>
    </>
  )
}

export default Header