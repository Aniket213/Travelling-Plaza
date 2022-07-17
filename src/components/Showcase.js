import React from 'react'
import './Style/Showcase.css';

export default function Showcase() {
  return (
    <div className='showcase'>
        <div className="showcasecontainer">
            <div className="showleft">
                <p className="showcasehead">We will take you to the best destinations in the world, <span className="bold">Explore With Us!</span> </p>
                <p className="showcasedesc showcasedesc1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore earum provident perspiciatis quaerat, sequi quidem voluptatem necessitatibus nemo laborum deleniti omnis exercitationem vero corporis, officia totam laboriosam maiores porro? Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <p className="showcasedesc showcasedesc2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi repellat perferendis ducimus eos, reprehenderit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur!</p>
                <p className="showcasedesc showcasedesc3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quidem. Lorem ipsum dolor sit.</p>
            </div>
            <div className="showrightcover">
                <div className="showright"> </div>
            </div>
        </div>

        <div className="showcasestrip">
            <div className="strip strip1">
                <i className="fa-solid fa-face-laugh-beam"></i>
                <p className='stripnum'>1000+</p>
                <p className='stripname'>HAPPY CUSTOMERS</p>
            </div>
            <div className="strip strip2">
                <i className="fa-solid fa-map-location-dot"></i>
                <p className='stripnum'>480</p>
                <p className='stripname'>DESTINATIONS</p>
            </div>
            <div className="strip strip3">
                <i className="fa-solid fa-paper-plane"></i>
                <p className='stripnum'>3500</p>
                <p className='stripname'>TOTAL TOURS</p>
            </div>
            <div className="strip strip4">
                <i className="fa-solid fa-person-military-rifle"></i>
                <p className='stripnum'>20+ years</p>
                <p className='stripname'>EXPERIENCE</p>
            </div>
        </div>

    </div>
  )
}
