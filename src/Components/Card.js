import React from 'react'
import axios from 'axios'
import './Card.css'

const Card = ({imagesrc,content,productId,userEmail}) => {

    const handleCardClick = async () => {
        // const userEmail = '123@gmail.com'; // Ideally, get this from logged-in user session or context
    
        try {
          const response = await axios.post('http://localhost:5000/api/v1/searches/log', {
            email: userEmail,
            productId: productId
          });
          alert('Search logged successfully for ' + content);
        } catch (error) {
          console.error('Error logging search:', error);
          alert('Error logging search');
        }
      };




  return (
    <div className='card' onClick={handleCardClick}>
    <img src={imagesrc} className='card-image'/>
    <div className='react-box'>
        
        <p className='card-content'>{content} </p>
        <p>Product Id is {productId}</p>
        <button className='card-button'>Add to Cart</button>
    </div>
      
    </div>
  )
}

export default Card
