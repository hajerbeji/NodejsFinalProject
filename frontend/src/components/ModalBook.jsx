import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ModalBook = ({element,closeModal,handleLike}) => {
  return (
    <div className='big_box_model'>
            <div className="box_model">
                <img src={element.img} alt="image" />
                <span className="description">
                    <div className='btnnn'> 
                        <button className={(element.liked)?"heart clicked" : "heart"} onClick={() => handleLike(element._id)} > <FontAwesomeIcon icon={faHeart} /> </button>
                        <button className='cancel' onClick={()=> closeModal()}> x </button>
                    </div>
                    <div className='sous_btnnn'>
                        <h1> {element.title} </h1>
                        <h2> {element.author} </h2>
                        <p> {element.description} </p>
                        <span className="rating">
                            <p> Rating : {element.rating} </p>
                        </span>
                    </div>
                    
                </span>
            </div> 


        </div>
  )
}

export default ModalBook

