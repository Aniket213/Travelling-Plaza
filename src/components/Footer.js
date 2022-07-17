import React from 'react';
import './Style/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="fcontainer">

            <div className="faddress fchild">
                <div className="faddresshead fhead">Address</div>
                <div className="faddresslocation faddresschild">Location : #21-B, Charlotte, New York, United States</div>
                <div className="faddressphone faddresschild">Phone : +91 6378355363</div>
                <div className="faddressemail faddresschild">Email : tour@gmail.com</div>
            </div>

            <div className="fabout fchild">
                <div className="fabouthead fhead">About Us</div>
                <div className="faboutdesc">We are best tour provider in the market with affordable prices and dogens of services. We provide tour to almost every place on earth.</div>
                <div className="fabouticons">
                    <i className="fa-brands footfacebook fa-facebook-square"></i>
                    <i className="fa-brands foottwitter fa-twitter-square"></i>
                    <i className="fa-brands footgoogle fa-google-plus-square"></i>
                    <i className="fa-brands footlinkedin fa-linkedin"></i>
                </div>
            </div>

            <div className="fplaces fchild">
                <div className="fplaceshead fhead">Travel Places</div>
                <div className="fplace">New York, USA</div>
                <div className="fplace">Paris, France</div>
                <div className="fplace">Los Angeles, Europe</div>
                <div className="fplace">Canada, Sweden</div>
            </div>

            <div className="fnews fchild">
                <div className="fnewshead fhead">Newsletter</div>
                <div className="fnewsdesc">By subscribing to our mailing list you will always get latest news and updates from us.</div>
                <div className="">
                    <input className='fnewsinput' type="email" placeholder='Enter your Email...' />
                </div>
            </div>

        </div>

        <div className="footerfoot">
            <p> <span className='footercopy'>&copy;</span> All Rights Reserved &nbsp;&nbsp; | &nbsp;&nbsp; Tour Plaza &nbsp;&nbsp; | &nbsp;&nbsp; Made by Aniket Mittal</p>
        </div>
    </div>
  )
}
