import React from 'react'
import './Style/Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Prevbtn = (props)=>{
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-chevron-left prevbtn"></i>
    </div>
  )
}

const Nextbtn = (props)=>{
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-chevron-right nextbtn"></i>
    </div>
  )
}

var settings = {
  autoplay : true,
  autoplaySpeed : 4000,
  initialSlide : 5,
  dots : true,
  infinite : true,
  dotsClass : 'slick-dots dots',
  prevArrow : <Prevbtn/>,
  nextArrow : <Nextbtn/>
}


export default function Home() {

  return (
    <div id='HOME' className='home'>
      <div className="homebox">
        <Slider { ...settings }>
          <div className="h1 h">
            <div className="homecontent">
              <h5>JOURNEY</h5>
              <h1>Your Dream Vacation</h1>
              <p>The best way to enjoy the life is to explore this wide world. Let's find some beautiful place to get lost.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="h2 h">
            <div className="homecontent">
              <h5>ENJOY</h5>
              <h1>Feel Good Places</h1>
              <p>The best way to enjoy the life is to explore this wide world. Let's find some beautiful place to get lost.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="h3 h">
            <div className="homecontent">
              <h5>GREAT EXPERIENCE</h5>
              <h1>Exploring The World</h1>
              <p>The best way to enjoy the life is to explore this wide world. Let's find some beautiful place to get lost.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="h4 h">
            <div className="homecontent">
              <h5>WHAT NEXT COUNTRY?</h5>
              <h1>Discover Night Francisco</h1>
              <p>The best way to enjoy the life is to explore this wide world. Let's find some beautiful place to get lost.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="h5 h">
            <div className="homecontent">
              <h5>UNIMAGINABLE</h5>
              <h1>So Get Ready</h1>
              <p>The best way to enjoy the life is to explore this wide world. Let's find some beautiful place to get lost.</p>
              <button>Learn More</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

