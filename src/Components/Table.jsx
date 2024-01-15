import React from 'react'
import './Table.css'



const Table = () => {
  return (
    <div className='Table-section'>
        <div className="case gr-bl">
            Evaluating Stage
        </div>
        <div className="case bl">
            Verification Stage
        </div>
        <div className="case gr">
           <span>Trading Period</span>
        </div>
        <div className="case wh">
            ∞
        </div>
        <div className="case gr" id='set1'>
            <span>Trading Period</span>
        </div>
        <div className="case wh"id='set12'>
            ∞
        </div>
        <div className="case gr">
            <span>Minimum Trading Days</span> 
        </div>
        <div className="case wh">
            0 days
        </div>
        <div className="case gr" id='set2'>
           <span>Minimum Trading Days</span> 
        </div>
        <div className="case wh" id='set22'>
            0 days
        </div>
        <div className="case gr">
           <span>Maximum Daily Loss</span> 
        </div>
        <div className="case wh">
            6%
        </div>
        <div className="case gr" id='set3'>
            <span>Maximum Daily Loss </span>
        </div>
        <div className="case wh" id='set32'>
            6%
        </div>
        <div className="case gr">
            <span>Maximum Loss</span>
        </div>
        <div className="case wh">
            12%
        </div>
        <div className="case gr" id='set4'>
            <span>Maximum Loss </span>
        </div>
        <div className="case wh" id='set42'>
            12%
        </div>
        <div className="case gr">
            <span>Profit Target</span>
        </div>
        <div className="case wh">
            10%
        </div>
        <div className="case gr" id='set5'>
           <span>Profit Target</span> 
        </div>
        <div className="case wh" id='set52'>
            10%
        </div>
        <div className="case gr">
           <span>Leverage </span> 
        </div>
        <div className="case wh">
            1:100
        </div>
        <div className="case gr" id='set6'>
           <span>Leverage</span> 
        </div>
        <div className="case wh" id='set62'>
            1:100
        </div>
        <div className="case bl-long">
            400$
        </div>


    </div>
  )
}

export default Table