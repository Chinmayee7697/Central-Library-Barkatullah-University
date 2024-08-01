import React from 'react'
import './WebOPAC.css'

export default function WebOPAC() {
  return (
    <div>
        <h1>e-Granthalaya Web-OPAC</h1>
        <hr />

        <div className="webContent">
            <h3 className='mainh3'>Library Automation</h3>
            <h3>e-Granthalaya, Central Library, BU Bhopal</h3>

            <div className="numbers">
                <ol>
                    <li>
                    <strong>Searching</strong> <br />
                    <a href="https://eg4.nic.in/mpbu/OPAC/Default.aspx">e-Granthalaya OPAC: A Digital Agenda for Library Automation and Networking</a>
                    </li>
                    <li>
                        <strong>Advanced Searching </strong> <br />
                        <a href="http://egranthalaya.nic.in">e-Granthalaya : A Digital Agenda For Library Automation and Networking </a>
                    </li>
                    <li>
                        <strong> Basic Searching</strong><br />
                        <a href="https://eg4.nic.in/mpbu/OPAC/Default.aspx">e-Granthalaya : A Digital Agenda For Library Automation and Networking</a>
                    </li>
                    <li>
                        <strong>e-Book Searching </strong><br />
                        <a href="https://eg4.nic.in/mpbu/OPAC/DLibrary.aspx">Digital Library Services powered by e-Granthalaya</a>
                    </li>
                </ol>
            </div>

            <div className="access">
            <h3>Log in e-Granthalaya</h3>
                <ol>
                    <li>
                        <strong>Admin Log in Page</strong><br />
                        <a href="https://eg4.nic.in/MPBU/">e-Granthalaya: A Digital Agenda for Library Automation and Networking</a>
                    </li>
                    <li>
                        <strong>Member Log in page</strong><br />
                        <a href="https://eg4.nic.in/mpbu/OPAC/Default.aspx">e-Granthalaya OPAC: A Digital Agenda for Library Automation and Networking </a>
                    </li>
                </ol>
            </div>
        </div>
    </div>
  )
}
