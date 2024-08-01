import React from 'react'
import './HomePageCard.css'
import { Link } from 'react-router-dom';

export default function HomePageCard(props) {
  const isInternalLink = props.link.startsWith('/');
  
  return (
    <div className='card'>
     <img src={props.image} alt={props.title} className='card-image' />
      <div className='card-content'>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-description'>{props.description}</p>
        {isInternalLink ? (
          <Link to={props.link} className='card-button'>{props.button}</Link>
        ) : (
          <a href={props.link} className='card-button' target="_blank" rel="noopener noreferrer">{props.button}</a>
        )}
      </div>
    </div>
  )
}
