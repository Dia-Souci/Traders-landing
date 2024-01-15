import React from 'react'
import './how.css'
import arrp from '../extraFiles/arrWh.png'
import Table from './Table.jsx';
import { useState } from 'react';
const How = () => {
    const [open,setOpen] = useState(true)
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [open3,setOpen3] = useState(false)
    const [open4,setOpen4] = useState(false)
    const [open5,setOpen5] = useState(false)
    const [open6,setOpen6] = useState(true)

  return (
    <div className='blue-holder'>
        <h1 className='Title-how'> How it works </h1>
        <div className="selection">
            <div className="first-bar">
                <div className={`phase ${open? 'selected' : ' '}`} id='1' onClick={()=>{if(!open){setOpen(!open); setOpen1(!open1)}}}>
                    Phase One
                </div>
                <div className={`phase ${open1? 'selected' : ' '}`} id='2' onClick={()=>{if(!open1){setOpen(!open); setOpen1(!open1)}}}>
                    Phase Two
                </div>
            </div>
            <div className="second-bar">
                <div className={`price ${open2? 'selected' : ' '}`} id='15' onClick={()=>{if(!open2){setOpen2(!open2);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(false);}}}>
                    15K
                </div>
                <div className={`price ${open3? 'selected' : ' '}`} id='25' onClick={()=>{if(!open3){setOpen2(false);setOpen3(!open3);setOpen4(false);setOpen5(false);setOpen6(false);}}}>
                    25k
                </div>
                <div className={`price ${open4? 'selected' : ' '}`} id='50' onClick={()=>{if(!open4){setOpen2(false);setOpen3(false);setOpen4(!open4);setOpen5(false);setOpen6(false);}}}>
                    50k
                </div>
                <div className={`price ${open5? 'selected' : ' '}`} id='100' onClick={()=>{if(!open5){setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(!open5);setOpen6(false);}}}>
                    100k
                </div>
                <div className={`price ${open6? 'selected' : ' '}`} id='200' onClick={()=>{if(!open6){setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(!open6);}}}>
                    200k
                </div>
            </div>
        </div>
        <Table/>
        <div className="buttonGroup">
            <button className='btn-blk'>
            <img src={arrp} alt=""/>   Get Funded
            </button>
            <button className='btn-ylw'>
                Refund + Profit split
            </button>
        </div>
    </div>
  )
}

export default How