import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'


const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const handleSwitch = () =>{
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            alert('Enter email and password');
            return;
        }
        if (isSignup && !name) {
            alert('Enter name to continue');
            return;
        }
        if (isSignup) {
            dispatch(signup({ name, email, password }, navigate));
        } else {
            dispatch(login({ email, password }, navigate));
        }
    };
    

    return (
    <section className='auth-section'>
        {  isSignup && <AboutAuth/>   }

        <div className= 'auth-container-2'>
            { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}

             <form onSubmit={handleSubmit}>
                { isSignup && (
                    <label htmlFor='name'>
                        <h4>Display Name</h4>
                        <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}} />
                    </label>
                )}
            <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
            </label>

            <label htmlFor="password">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4>Password</h4>
                    { ! isSignup && <h4 style={{color:'var(--blue-300)', fontSize:'13px'}}>forgot password?</h4>} 
                </div>
                <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
                { isSignup && <p style={{fontSize:'14px'}}> Passwords must contain at least eight characters, including at least 1 <br />letter and 1 number. </p>}
           
            </label>
            <button type='submit' className='auth-btn cmn-btn'> { isSignup ? 'Sign up':'Log in' } </button>

            {   isSignup && (
                    <p style={{fontSize:'13px', color:'rgb(99, 107, 116)'} }>
                        By clicking “Sign up”, you agree to our 
                        <span style={{color:'rgb(27, 117, 208)'}}> terms of service</span> 
                         and acknowledge<br /> you have read our 
                        <span style={{color:'rgb(27, 117, 208)'}}>  privacy policy. </span>
                    </p>
                )
            }

        </form>

        <p>
            { isSignup ? 'Already have an account ? ': "Don't have an account ?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
                { isSignup ? 'Log in' :'sign up'}
            </button>
        </p>
        
        </div>

    </section>
    )

}

export default Auth