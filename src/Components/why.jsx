import React from 'react'
import './why.css'
import ico1 from '../extraFiles/ico1.png'
import ico2 from '../extraFiles/ico2.png'
import ico3 from '../extraFiles/ico3.png'
import ico4 from '../extraFiles/ico4.png'
import ico5 from '../extraFiles/ico5.png'
import ico6 from '../extraFiles/ico6.png'
const Why = () => {
  return (
    <div className='whyus'>
        <h3 className='head'>
        Why Choose Us
        </h3>

        <div className="ico-cont">
            <div className="ico">
                <div className="containerTemp">
                    <img src={ico1} alt="" />
                </div>
                <p>Leverage FX 1:100 , Crypto 1:2, Indices 1:30, Metals & Energies 1:50</p>
            </div>
            <div className="ico">
                <div className="containerTemp">
                    <img src={ico2} alt="" />
                </div>
                <p>Commission 6$ Per One Lot Standard. Indices Are Commission Free.</p>
            </div>
            <div className="ico">
                <div className="containerTemp">
                    <img src={ico3} alt="" />
                </div>
                <p>Tier 1 Banks With Deep Pool Liquidity</p>
            </div>
            <div className="ico">
                <div className="containerTemp">
                    <img src={ico4} alt="" />
                </div>
                <p>All Major WorldMarkets</p>
            </div>
            <div className="ico">
                <div className="containerTemp">
                    <img src={ico5} alt="" />
                </div>
                <p>Users of Starter have reported up to a 900% return on investment.</p>
            </div>
            <div className="ico">
                <div className="containerTemp">
                    <img src={ico6} alt="" />
                </div>
                <p>Starter comes packed with everything you need to design landing pages.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Why