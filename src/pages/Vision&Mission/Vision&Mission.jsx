import React from 'react'
import './VisionMission.css'

export default function VisionMission() {
  return (
    <div>
    <h1>Vision & Mission</h1>
    <hr />
    <div className='visionMission'>
    <div style={{paddingTop:'20px'}}>
    <div className="vm para">
        <h3>Vision</h3>
        <ul>
            <li>Literate, citizens prepared for an evolving world</li>
            <li>Library rich resources provides the opportunity for everyone to treasure the past and to create a future that is full of possibilities.</li>
        </ul>
    </div>

    <div className="vm para">
        <h3>Mission</h3>
        <ul>
            <li>Service Through Knowledge</li>
            <li>Libraries connect learners to resources, ideas and literature, inspiring discoveries, creation and innovation.</li>
        </ul>
    </div>
</div>
</div>
    </div>
  )
}
