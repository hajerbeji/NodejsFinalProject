import React from 'react'
import { useNavigate } from 'react-router-dom'

const Authentification = () => {
  const navigate = useNavigate()
  return (
    <div className='box_authentif'>
        <div className="authentif">
            <span className="head">
                <h4>Authentification</h4>
                <button className='x' onClick={()=>navigate('/booklist')} >x</button>
            </span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, in temporibus reiciendis sapiente maxime, doloribus ad inventore culpa laudantium omnis distinctio ipsa architecto voluptates expedita. Placeat vero molestias dolorem molestiae.</p>
            <span className='btnsss'>
                <button className='btnsss1' onClick={()=>navigate('/booklist')} >Refuse All</button>
                <button className='btnsss2' onClick={()=>navigate('/booklist')} >Accept All</button>
            </span>
        </div>
    </div>
  )
}

export default Authentification