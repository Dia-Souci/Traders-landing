import React from 'react'
import './footer.css'
import Logo from '../extraFiles/Logo.png'
import fb from '../extraFiles/Fb.png'
import insta from '../extraFiles/insta.png'
import tweeter from '../extraFiles/tweeter.png'
import pix from '../extraFiles/pixart.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Footer = () => {
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [open3,setOpen3] = useState(false)
  return (
    <div className='footer-section'>
        <div className="subscription">
            <div className="subscription-titles">
                <h3>
                    Learn More 
                </h3>
                <p>
                    Sign up to our newsletter
                </p>
            </div>
            <div className="subscriptions-Fields">
                <input type="text" placeholder='Your Email' className='Email-field' />
                <button className='sub-btn'>Subscribe</button>
            </div>
        </div>
        <div className="footer-info">
            <div className="row">
            <div className="container-drop">
            <p className='bigtxt' onClick={()=>{setOpen(!open)}}>Information</p>
            <FontAwesomeIcon icon={faChevronDown} className='downArr' onClick={()=>{setOpen(!open)}}/>
            </div>
            
            <p className={`lighttxt ${open? 'active' : 'inactive'}`} id='grid1'><a href="#">Home</a></p>
            <p className={`lighttxt ${open? 'active' : 'inactive'}`} id='grid5'><a href="#">FAQ</a></p>
            <p className={`lighttxt ${open? 'active' : 'inactive'}`} id='grid9'><a href="#">Pricing</a></p>
            </div>
            <div className="row">
            <div className="container-drop">
            <p className='bigtxt' onClick={()=>{setOpen1(!open1)}}>Legal</p>
            <FontAwesomeIcon icon={faChevronDown} className='downArr' onClick={()=>{setOpen1(!open1)}}/>
            </div>
            
            <p className={`lighttxt ${open1? 'active' : 'inactive'}`} id='grid2'><a href="#">Privacy Policy</a></p>
            <p className={`lighttxt ${open1? 'active' : 'inactive'}`} id='grid6'><a href="#">Terms & Conditions</a></p>
            </div>
            <div className="row">
            <div className="container-drop">
            <p className='bigtxt' onClick={()=>{setOpen2(!open2)}}>Support</p>
            <FontAwesomeIcon icon={faChevronDown} className='downArr' onClick={()=>{setOpen2(!open2)}}/>
            </div>
            
            <p className={`lighttxt ${open2? 'active' : 'inactive'}`} id='grid3'><a href="#">Contact Us</a></p>
            <p className={`lighttxt ${open2? 'active' : 'inactive'}`} id='grid7'><a href="#">contact@mindsetdev.com</a></p>
            <p className={`lighttxt ${open2? 'active' : 'inactive'}`} id='lastP'><a href="#">+213-7-77-77-77</a></p>
            </div>
            <div className="row" id='lastRow'>
            <div className="container-drop">
            <p className='bigtxt' onClick={()=>{setOpen3(!open3)}}>Useful Links</p>
            <FontAwesomeIcon icon={faChevronDown} className='downArr' onClick={()=>{setOpen3(!open3)}}/>
            </div>
            
            <p className={`lighttxt ${open3? 'active' : 'inactive'}`} id='grid4'><a href="#">Discord</a></p>
            <p className={`lighttxt ${open3? 'active' : 'inactive'}`} id='grid8'><a href="#">Get Funded</a></p>
            </div>
            
        </div>
        
        <div className="lastcontent">
            <hr />
            <div className="footer-logos">
                <div className="leftSide-cred">
                    <div className="img-cnt">
                        <img src={Logo} alt="" />
                    </div>
                    <p>©2023 Golden Falcon Traders. All rights reserved.</p>
                </div>
                <div className="rightSide-cred">
                    <img src={fb} alt="" />
                    <img src={insta} alt="" />
                    <img src={tweeter} alt="" />
                    <img src={pix} alt="" />
                </div>
            </div>
            <hr />

            <p className='footerTxt'>All content published and distributed by Golden Falcon Traders, and its affiliates(collectively, the Company) is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund, Funding pips does not act as or conduct services as a broker. Funding pips does not act as or conduct services as a custodian. People who register for our programs do so at their own volition, Purchases of programs should not be considered deposits. All program fees are used for operation costs including, but not limited to, staff, technology and other business related expenses. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily indicative of future results.</p>
        </div>
    </div>
  )
}

export default Footer