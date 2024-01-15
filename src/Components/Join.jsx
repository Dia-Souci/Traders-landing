import React from 'react'
import './join.css'
import arrp from '../extraFiles/arr.png'
import discordIco from '../extraFiles/discord.png'

const Join = () => {
  return (
    <div className='Join-cluster'>
        <h1 className='head'>
        Join A Team Of Skillful Traders
        </h1>
        <p className='desc'>
            When it comes to trading we believe in consistency and risk management, which are the discipline indicator,{'\n'} the rest of the skills can be developed. Please keep that in mind! We are seeking real traders not bounty {'\n'} hunters.
        </p>
        <div className="btn-grp">
            <button className='btn2' id='btnDisc'><img src={discordIco} alt="" />  Join Discord</button>
            <button className='btn2' id='btnFund'><img src={arrp} alt="" />  Get Funded</button>
        </div>
    </div>
  )
}

export default Join