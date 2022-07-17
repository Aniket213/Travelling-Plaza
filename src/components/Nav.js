import React from 'react'
import './Style/Nav.css';
import { Link } from 'react-scroll';

export default function Nav(props) {
  return (
    <div className='nav'>
        <div className="navbox">

          <input onClick={props.modebtn} id="toggle" className="toggle" type="checkbox" />

          <div className="navl">
            <i className=" logo fa-solid fa-plane-departure"></i>
            <p className="logoname">Tour Plaza</p>
          </div>

          <div className="hamburger">
            <input className='check' type="checkbox" />
            <div className="lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="navr">
              <Link className='navlinks' activeClass='active' to='HOME' spy={true} smooth={true} offset={0} duration={500} >Home</Link>
              <Link className='navlinks' activeClass='active' to='places' spy={true} smooth={true} offset={0} duration={500} >Places</Link>
              <Link className='navlinks' activeClass='active' to='services' spy={true} smooth={true} offset={0} duration={500} >Services</Link>
              <Link className='navlinks' activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} >About Us</Link>
              <Link className='navlinks' activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500} >Contact</Link>
              <Link className='navbtn' activeClass='active' to='places' spy={true} smooth={true} offset={0} duration={500} >Book Now</Link>
            </div>
          </div>

        </div>
    </div>
  )
}
