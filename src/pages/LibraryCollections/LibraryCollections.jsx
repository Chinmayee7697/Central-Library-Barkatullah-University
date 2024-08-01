import React from 'react'
import './LibraryCollections.css'
import { Link } from 'react-router-dom'

export default function LibraryCollections() {
  return (
    <div className='collections'>
        <h1>Library Collections</h1>
        <hr />

        <div className="content">
            <h2>Collections</h2>
            <h3>Print Collection</h3>
            <p>The print collection of Central Library Barkatullah University is comprised of the following</p>
        </div>

        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Document Category</th>
                        <th>Number</th>
                        <th>Online Access</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Books</td>
                        <td>: 94768</td>
                        <td><a href='https://eg4.nic.in/MPBU/OPAC/Default.aspx'>Access OPAC</a></td>
                    </tr>
                    <tr>
                        <td>Bound Journals</td>
                        <td>: 3000 bound</td>
                        <td><Link to='/journal'>Access Journals</Link></td>
                    </tr>
                    <tr>
                        <td>Ph.D. Theses</td>
                        <td>: 10272</td>
                        <td><a href='https://eg4.nic.in/MPBU/OPAC/Default.aspx'>Access OPAC</a></td>
                    </tr>
                    <tr>
                        <td>Manuscripts(हस्तलिखित पुरातन ग्रन्थ)</td>
                        <td>: 85</td>
                        <td><Link to='/manuscripts' >Manuscript Section</Link></td>
                    </tr>
                    <tr>
                        <td>E-Theses <br /> ShodhGanga  Access</td>
                        <td>: 127</td>
                        <td><a href="https://shodhganga.inflibnet.ac.in/handle/10603/225987">https://shodhganga.inflibnet.ac.in/handle/10603/225987</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}
