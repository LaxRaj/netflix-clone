import React, { useState } from 'react'
import './LoginScreen.css'
import SigninScreen from './SigninScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen__backgorund'>
            <img 
            className='loginScreen__logo'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='login logo'/>
            <button 
            onClick={ () => setSignIn(true)}
            className='loginScreen__button'>
                Sign in
            </button>

            <div className='loginScreen__gradient' />
        </div>
        <div className='loginScreen__body'>
            { signIn ? (
                <SigninScreen />
            ) : ( 
            <>
            <h1>Free Movies that's what I wanted!!!!</h1>
            <h2> Cancel those expensive plans</h2>
            <h3>Ready to Watch? Enter your email to create or restart your membership.</h3>

            <div className='loginScreen__input'>
                <form>
                    <input type='email' placeholder='Email' />
                    <button 
                        onClick={ () => setSignIn(true)}
                        className='loginScreen__getStarted'>
                        GET STARTED
                        </button>
                </form>
            </div>    

            </> 
            )}
        </div>
    </div>
  )
}

export default LoginScreen