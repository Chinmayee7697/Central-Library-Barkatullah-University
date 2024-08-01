import React from 'react'
import { Link } from 'react-router-dom'
import './SubFooter.css'

export default function SubFooter() {
  return (
    <div className="subfooter">
        {/* <div className="adminlogin">
            <Link to='/adminlogin'>
                ADMIN LOGIN
            </Link>
        </div> */}

        <div className="socialLinks">
                <a href='http://www.bubhopal.ac.in/1068/Home'> Barkatullah University </a>
        </div>
    </div>
  )
}
