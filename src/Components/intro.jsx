import React from 'react'
import '../Components/intro.css'
import man from '../extraFiles/khalijiman.png'
import arrp from '../extraFiles/arrWh.png'
import discordIco from '../extraFiles/discord.png'

const Intro = () => {
  return (
    <div className='intro-section'>
        <div className="info">
            <h1 className='main-title'>Introducing the first Arabian Prop Firm</h1>
            <p className='description'>Our capital. Your trade. and its 100% Hallal</p>
            <div className="buttons-info">
                <button className='btn-wh'><img src={discordIco} alt=""/>  Join Discord</button>
                <button className='btn-bl'><img src={arrp} alt=""/>   Get Funded</button>
            </div>
        </div>
        <div className="img-container">
            <img src={man} alt="" />
        </div>
    </div>
  )
}

export default Intro