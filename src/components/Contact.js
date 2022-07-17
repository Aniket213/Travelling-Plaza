import React from 'react';
import './Style/Contact.css';

export default function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className="contactcontainer">
            <div className="contactimgcover">
              <div className="contactimg"></div>
            </div>

            <form className='contactform' autoComplete='off'>
                <p className="contacthead">Contact Us</p>
                <input className='formname formitems' type="text" placeholder='Name' />
                <input className='formemail formitems' type="email" placeholder='E-mail'/>
                <textarea className='formtextarea formitems' rows="6" placeholder='Type your Message here...'></textarea>
                <button className='contactbtn'>Submit</button>
            </form>

        </div>

        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001351.240100674!2d-78.01303137660092!3d42.724741079588924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1657949393091!5m2!1sen!2sin" title='Our office' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
  )
}
