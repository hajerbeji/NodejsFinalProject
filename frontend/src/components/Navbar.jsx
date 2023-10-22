import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faUser, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import PlusModal from './PlusModal';
import { useNavigate } from 'react-router-dom';

const Navbar = ({openfavoris, setopenfavoris, openPlusModal, setopenPlusModal, searchinput, setsearchinput, booktosearch, setbooktosearch}) => {
    const navigate = useNavigate()
    return (
    <div className='navbar'>
        <img src="https://tadviser.ru/images/9/90/MyBook.png" alt="appLogo" onClick={()=>navigate('/booklist')} />
        <div>
            <FontAwesomeIcon icon={(!searchinput)? faSearch : faXmark} className='icon' onClick={()=>setsearchinput(!searchinput)} />
            {(searchinput)? <input type="text" className='searchinput' placeholder="Write the title to search ..." onChange={(e)=>setbooktosearch(e.target.value)} />:null}
            <FontAwesomeIcon icon={faPlus} className='icon' onClick={()=>setopenPlusModal(true)} />
            {(openPlusModal)? <PlusModal setopenPlusModal={setopenPlusModal}  />: null}
            <FontAwesomeIcon icon={faHeart} className='icon' onClick={()=>{setopenfavoris(true); navigate('/favourite')}} />
            <FontAwesomeIcon icon={faUser} className='icon' />
        </div>
    </div>
  )
}

export default Navbar