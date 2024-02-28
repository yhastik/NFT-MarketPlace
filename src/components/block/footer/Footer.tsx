import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <ul className="footer-nav-items">
        <li className="footer-nav-item footer-item-title">Explore</li>
        <Link to='/'className='Link'><li className="footer-nav-item">Marketplace</li></Link>
        <Link to='/Panking'className='Link'><li className="footer-nav-item">Ranking</li></Link>
        <Link to='/ConnectAwallet'className='Link'><li className="footer-nav-item">Connect a wallet</li></Link>
      </ul>
      <ul className="footer-form-items">
        <li className="footer-nav-item footer-form-item footer-item-title">Join our weekly digest</li>
        <li className="footer-nav-item footer-form-item footer-long-item">Get exclusive promotions & updates straight to your inbox.</li>
        <li className="footer-nav-item footer-form-item form-item">
          <input type="mail" placeholder='Enter your email here'/><button>Subscribe</button>
        </li>
      </ul>
    </footer>
    </>
  )
}

export default Footer