import React from 'react'
import './Style/Team.css';

export default function Team() {
  return (
    <div id='about' className='team'>
        <div className="teamhead">
            <p>Our Wonderful Team</p>
        </div>

        <div className="teamcontainer">
            <div className="team1 teamall">
                <div className="teamimgcover">
                    <div className="teamimg1 teamimg"></div>
                </div>
                <div className="teamimgdesc">
                    <div className="teamname">Astina Brown</div>
                    <div className="teamrole">Tour Guide</div>
                    <div className="teamlinks"><i className="fa-brands fa-facebook teamfacebook"></i><i className="fa-brands fa-instagram-square"></i></div>
                </div>
            </div>
            <div className="team2 teamall">
                <div className="teamimgcover">
                    <div className="teamimg2 teamimg"></div>
                </div>  
                <div className="teamimgdesc">
                    <div className="teamname">Bryan Watson</div>
                    <div className="teamrole">Tour Consultant</div>
                    <div className="teamlinks"><i className="fa-brands fa-facebook teamfacebook"></i><i className="fa-brands fa-instagram-square"></i></div>
                </div>
            </div>
            <div className="team3 teamall">
                <div className="teamimgcover">
                    <div className="teamimg3 teamimg"></div>
                </div>               
                <div className="teamimgdesc">
                    <div className="teamname">Angel White</div>
                    <div className="teamrole">Travel Agent</div>
                    <div className="teamlinks"><i className="fa-brands fa-facebook teamfacebook"></i><i className="fa-brands fa-instagram-square"></i></div>
                </div>
            </div>
            <div className="team4 teamall">
                <div className="teamimgcover">
                    <div className="teamimg4 teamimg"></div>
                </div>                       
                <div className="teamimgdesc">
                    <div className="teamname">Nick Akachi</div>
                    <div className="teamrole">Agency Director</div>
                    <div className="teamlinks"><i className="fa-brands fa-facebook teamfacebook"></i><i className="teaminsta fa-brands fa-instagram-square"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}
