import React from 'react';
import './UpdateBox.css';
import updatesData from './updates.json';

// const updates = [
//   { date: '03-07-2024', content: 'New books have been added to the library collection.' },
//   { date: '01-07-2024', content: 'Journal Links are added.' },
//   { date: '20-06-2024', content: 'e-Granthalaya Web-OPAC has been updated with new features.' },
//   { date: '15-06-2024', content: 'Workshop on digital resources will be held on July 10th.' },
//   { date: '10-06-2024', content: 'Extended library hours during exam period starting July 1st.' },
// ];

function UpdateBox() {

  const {updates} = updatesData;
  
  return (
    <div className="monitor">
    <div className='updateBox'>
      <h2>Library Updates</h2>
      <div className='updateContent'>
        <ul>
          {updates.map((update, index) => (
            <li key={index}>
              <span className='updateDate'>{update.date}</span>
              <span className='updateText'>{update.content}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className='stand'></div>
    </div>
  );
}

export default UpdateBox;
