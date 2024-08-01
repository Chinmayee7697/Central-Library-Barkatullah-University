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
          Designed, Developed & Maintained by <strong>Central Library, BU </strong>
        </p>
      
    </div>
  );
}
