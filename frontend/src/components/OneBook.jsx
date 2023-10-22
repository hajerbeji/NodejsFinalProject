import React, { useState } from 'react'
import ModalBook from './ModalBook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';

const OneBook = ({element, handleLike}) => {
    const [openmodal, setopenmodal] = useState(false)
  
    return (
        <div className='onebook' >
            <img src={element.img} alt="book_img" onClick={()=> {setopenmodal(true)}}  />
            <section>
                <h3 className='title'>{element.title}</h3>
                <span>
                    <button className={(element.liked)?"heart clicked" : "heart"} onClick={() => handleLike(element._id)} > <FontAwesomeIcon icon={faHeart} /> </button>
                    <h3> {element.rating}<FontAwesomeIcon icon={faStar} /> </h3>
                </span>
            </section>
            {(openmodal)? <ModalBook element={element}  handleLike={handleLike } closeModal={()=>{setopenmodal(false)}} /> : null}
        </div>
    )
}

export default OneBook
