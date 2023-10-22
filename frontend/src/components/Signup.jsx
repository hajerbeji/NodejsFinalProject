import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    return (
        <div className='login'>
            <form className='form'>
                <span>
                    <label>Username</label>
                    <input type="text" name="" id="" />
                </span>
                <span>
                    <label>Email</label>
                    <input type="email" name="" id="" />
                </span>
                <span>
                    <label>Password</label>
                    <input type="password" name="" id="" />
                </span>
                <button onClick={()=>navigate('/authentification')} >SignUp</button>
                <button onClick={()=>navigate('/login')} >Login</button>
            </form>
        </div>
    )
}

export default Signup
