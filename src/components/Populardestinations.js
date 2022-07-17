import React from 'react'
import './Style/Populardestinations.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Populardestinations() {
  const Prevbtn = (props)=>{
    const { onClick } = props;
    return (
      <div className='slick-arrow slick-prev pdestprev' onClick={onClick}>
        <i className="fa-solid fa-chevron-left prevbtn"></i>
      </div>
    )
  };
  
  const Nextbtn = (props)=>{
    const { onClick } = props;
    return (
      <div className='slick-arrow slick-next pdestnext' onClick={onClick}>
        <i className="fa-solid fa-chevron-right nextbtn"></i>
      </div>
    )
  };
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow : <Prevbtn/>,
    nextArrow : <Nextbtn/>,
    responsive : [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <div id='places' className='populardestinations'>

        <div className="pdesthead">
            <p>Popular Destinations</p>
        </div>

        <div className="pdestmain">

            <div className="pdestsec1">
              <Slider className='pdestslider' { ...settings } >
                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg1 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Bali, Indonesia</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 12,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span><span>(3.4K)</span></span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg2 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Mummy, Egypt</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 14,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(1.8K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg3 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Agra, India</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 9,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(4.5K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg4 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>London, England</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 12,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(2.6K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg5 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Neatherlands</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 10,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(2.8K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg6 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>New zealand</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 18,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(1.9K)</span></div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            
            <div className="pdestsec2">
              <Slider className='pdestslider' { ...settings } >
                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg7 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>China, Asia</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 4,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(3.2K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg8 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Iceland, Atlantic</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 14,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(1.8K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg9 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Japan</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 11,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(4.8K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg10 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Maldives</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 16,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(5.8K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg11 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Paris, France</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 10,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(2.8K)</span></div>
                    </div>
                  </div>
                </div>

                <div className="pdestslide">
                  <div className="pdestinnerslide">
                    <div className="pdestimg12 pdestimg"><button className='pdestbtn'>Book Now</button></div>
                    <div className="pdestimgdesc">
                      <p className="pdestdest"><i className="fa-solid fa-location-dot"></i> <span>Venis, Italy</span></p>
                      <p className="pdestprice">Starting at <i className="fa-solid fa-dollar-sign"></i> 16,000</p>
                      <div className="pdeststars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i> <span>(6.4K)</span></div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

        </div>

    </div>
  )
}
