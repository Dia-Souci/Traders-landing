import React from 'react'
import './options.css'
import table from '../extraFiles/fakeTable.png'
import yellow from '../extraFiles/yellowTradeCoin.png'
import star1 from '../extraFiles/Crescent And Star (HD) (3) 1.png'
import star2 from '../extraFiles/Crescent And Star (HD) (4) 1.png'
import star3 from '../extraFiles/Crescent And Star (HD) (2) 1.png'
import star4 from '../extraFiles/5143409 1.png'

const Options = () => {
  return (
    <div className='option-section'>
        <div className="option-section1">
            <div className="text-container2" >
                <img src={yellow} alt="" />
                <h1>Built by traders for traders.</h1>
                <p>Your trading ideas, Our Risk.</p>
            </div>
            <div className="shapes-container">
                <div className="upperdivimg">
                    <div className="img-container2">
                        <img src={table} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="option-section2">
            <div className="card">
                <div className="imgopt"><img src={star1} alt="" /></div>
                
                <div className="text-container-small">
                    <h4>Trade Like you want</h4>
                    <p>Use an "EA", hold during news, hold trades over the weekend and trade lot sizes as big as the leverage allows for.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgopt"><img src={star2} alt="" /></div>
                
                <div className="text-container-small">
                    <h4>Payout System</h4>
                    <p>Trade longer, get more profit. Weekly payouts with 80% split. Earn Hot Seat for 90% on-demand payouts via Deel or crypto.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgopt"><img src={star3} alt="" /></div>
                
                <div className="text-container-small">
                    <h4>100% hallal</h4>
                    <p>We offer Islamic accounts (swap-free) on MT4 and MT5 for clients with religious restrictions on interest.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgopt"><img src={star4} alt="" /></div>
                
                <div className="text-container-small">
                    <h4>Unlimited trading</h4>
                    <p>No time limits on trading days, allowing you to trade stress-free. Take your time as needed.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Options