import React from 'react'
import HomePageCard from '../../components/HomePageCard/HomePageCard'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import UpdateBox from '../../components/UpdateBox/UpdateBox';
import './Home.css'

export default function Home() {
  return (
    <div className='homePage'>
        <div className="libraryImg">
        <h1>Welcome to Central Library, Barkatullah University, Bhopal</h1>
            {/* <img src="../img/mainPage_libraryPic.jpeg" alt="" /> */}
            <Carousel autoPlay infiniteLoop showThumbs={false} className='corousel'>
          <div className='images'>
            <img src="../img/mainPage_libraryPic.jpeg" alt="Library Image 1" />
          </div>
          <div className='images'>
            <img src="../img/CentralLibraryImg.jpg" alt="Library Image 2" />
          </div>
          <div className='images'>
            <img src="../img/20240702_125757.jpg" alt="Library Image 3" />
          </div>
          <div className='images'>
            <img src="../img/LibraryVisit.jpg" alt="Library Image 4" />
          </div>
          <div className='images'>
            <img src="../img/workshop.jpg" alt="Library Image 5" />
          </div>
          <div className='images'>
            <img src="../img/LibraryStaff.jpg" alt="Library Image 6" />
          </div>
          {/* <div className='images'>
            <img src="../img/20240702_130111.jpg" alt="Library Image 7" />
          </div> */}
          <div className='images'>
            <img src="../img/LibraryImg.jpg" alt="Library Image 8" />
          </div>
          <div className='images'>
            <img src="../img/20230111_171609.jpg" alt="Library Image 9" />
          </div>
          <div className='images'>
            <img src="../img/photo_4_2024-07-02_13-08-40.jpg" alt="Library Image 10" />
          </div>
          <div className='images'>
            <img src="../img/ReadingImg.jpg" alt="Library Image 11" />
          </div>
          <div className='images'>
            <img src="../img/photo_15_2024-07-02_13-08-40.jpg" alt="Library Image 12" />
          </div>

        </Carousel>

        </div>

        <div className="homeContent">

            <HomePageCard  
            image='https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='e-Granthalaya Page'
            description=''
            link='https://eg4.nic.in/MPBU/OPAC/Default.aspx'
              button='Go'
            />

            {/* <HomePageCard  
            image='https://images.unsplash.com/photo-1604153138516-28db213cf26b?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='e-Granthalaya Web-OPAC'
            description='To be included...'
            link='/webopac' /> */}

            <HomePageCard  
            image='https://images.unsplash.com/photo-1529443601747-2d02ab3da2c8?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='INFLIBNet'
            description=''
            link='/inflibnet'
              button='Go'
            />

            <HomePageCard  
            image='https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='e-Resources'
            description=''
            link='/eResources'
              button='Go'
            />

            <UpdateBox />

        </div>
    </div>
  )
}
