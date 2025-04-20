import React from 'react';
import './Footer.css';
import SubFooter from '../SubFooter/SubFooter';

export default function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <SubFooter />
        <p>
          Copyright © BU Bhopal {currentYear}. All Rights Reserved. <br />
          Designed, Developed & Maintained by <strong><a href="https://www.linkedin.com/in/chinmayee-sharma-6252b8225/" style={{ color: 'black' }}> Chinmayee Sharma </a></strong>
        </p>
      
    </div>
  );
}
