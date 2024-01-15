import React from 'react'
import './about.css'
import arrp from '../extraFiles/arr.png'
import discordIco from '../extraFiles/discord.png'
import Happy from '../extraFiles/happyTrader.png'

const About = () => {
  return (
    <div className='about-uss'>
        <h1 className='head'>
            About us
        </h1>

        <div className="about-container">
          <div className="img-cnt1">
            <img src={Happy} alt="" />
          </div>
          <div className="txtUtils-cnt">
              <h4 className='sideTitle'>
                Stay Updated with our in depth trading rules
              </h4>
              <p>Trading Objectives are a key element to evaluate a trader s skill, meeting the trading objectives proves that trader is disciplined and consistent.</p>
              <div className="btn-grp">
                <button id='btn-666'><img src={discordIco} alt="" /> Join Discord</button>
                <button id='btn-007'><img src={arrp} alt="" />  Get Funded</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About 