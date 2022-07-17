import React from 'react';
import './Style/Testimonial.css';

export default function Testimonial() {
  return (
    <div className='testimonial'>
        <div className="tmhead">
            <p>Our <span className='tmheadspan'>Testimonials</span></p>
        </div>

        <div className="tmcontainer">
            <div className="tm1 tm">
                <div className="tmstarpara">
                    <div className="tmstars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                    <p className="tmpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis ipsum quidem. Quibusdam, earum accusamus.</p>
                </div>
                <div className="tmdesc">
                    <img className='tmimg' src="images/persons/testimonials/client1.jpg" alt="" />
                    <p className="tmname">John Doe</p>
                </div>
            </div>
            <div className="tm2 tm">
                <div className="tmstarpara">
                    <div className="tmstars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                    <p className="tmpara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, tempora voluptate! Nam, accusantium itaque.</p>
                </div>
                <div className="tmdesc">
                    <img className='tmimg' src="images/persons/testimonials/client2.jpg" alt="" />
                    <p className="tmname">Krip Lamba</p>
                </div>
            </div>
            <div className="tm3 tm">
                <div className="tmstarpara">
                    <div className="tmstars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                    <p className="tmpara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo optio aspernatur cum esse consequuntur. Sunt.</p>
                </div>
                <div className="tmdesc">
                    <img className='tmimg' src="images/persons/testimonials/client3.jpg" alt="" />
                    <p className="tmname">Jade Gates</p>
                </div>
            </div>
        </div>

    </div>
  )
}
