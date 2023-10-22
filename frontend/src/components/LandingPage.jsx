import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div className='landingpage'>
            <section className='nav'>
                <img src="https://tadviser.ru/images/9/90/MyBook.png" alt="logo" />
                <span>
                    <button onClick={()=> navigate('/login')} >Login</button>
                    <button onClick={()=>navigate('/signup')} >SignUp</button>
                </span>
            </section>
            <section className='sous_nav'>
                <div>
                    <img src="https://tadviser.ru/images/9/90/MyBook.png" alt="logo" />
                    <span>
                        <h1>Teachers die, but books live on.</h1>
                        <p>Books are teachers as they teach us wisdom of thousands of years. Teachers come and go, but books carry on. That's why we can still access wisdom of greats such as Aristotle, Seneca, and Socrates nearly two thousand years after they walked on this planet.</p>
                    </span>
                </div>
                <img src="https://i.pinimg.com/564x/75/9b/95/759b953ef05b66d4ee21f424bdd1e4bf.jpg" alt="books" className='sous_nav_img' />
            </section>
        </div>
    )
}

export default LandingPage
