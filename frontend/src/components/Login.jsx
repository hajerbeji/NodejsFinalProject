import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='login'>
            <form className='form'>
                <span>
                    <label>Email</label>
                    <input type="email" name="" id="" />
                </span>
                <span>
                    <label>Password</label>
                    <input type="password" name="" id="" />
                </span>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label>Remember me</label>
                </div>
                <button onClick={()=>navigate('/authentification')} >Login</button>
                <button onClick={()=>navigate('/signup')} >SignUp</button>
            </form>
        </div>
    )
}

export default Login
