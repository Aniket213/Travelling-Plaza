import React from 'react'
import './Style/Services.css';


export default function Services() {
  return (
    <div id='services' className='services'>
        <div className="serviceshead">
            <p>Services</p>
        </div>

        <div className="servicescontainer">
            <div className="service service1">
                <div className="serviesicon"><i className="fa-solid fa-hotel"></i></div>
                <p className="servicename">Affordable Hotels</p>
                <p className="servicedesc"> We are collaborated with the best hotels in the world, so that our customers will be happy. </p>
            </div>
            <div className="service service2">
                <div className="serviesicon"><i className="fa-solid fa-person-hiking"></i></div>
                <p className="servicename">Fully Adventurer</p>
                <p className="servicedesc"> Out tours contain so much adventure that you are going to enjoy for sure. </p>
            </div>
            <div className="service service3">
                <div className="serviesicon"><i className="fa-solid fa-utensils"></i></div>
                <p className="servicename">Food And Drinks</p>
                <p className="servicedesc"> We provide A quality snaks and drinks for free between the tour. </p>
            </div>
            <div className="service service4">
                <div className="serviesicon"><i className="fa-solid fa-earth-asia"></i></div>
                <p className="servicename">Around The World</p>
                <p className="servicedesc"> Our tour packages are across 126+ countries which cover almost whole world. </p>
            </div>
            <div className="service service5">
                <div className="serviesicon"><i className="fa-solid fa-person-circle-check"></i></div>
                <p className="servicename">Safety Guide</p>
                <p className="servicedesc"> Our guides are highly trained and professionals, as well as friendly and caring too. </p>
            </div>
            <div className="service service6">
                <div className="serviesicon"><i className="fa-solid fa-plane"></i></div>
                <p className="servicename">Fastest Travel</p>
                <p className="servicedesc"> We belive more time enjoying and less time wasting, so we always choose fastest flights. </p>
            </div>
        </div>

    </div>
  )
}






