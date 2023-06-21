import React , { useRef } from 'react';
import { auth } from '../firebase';
import './SigninScreen.css'

function SigninScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value ,
            passwordRef.current.value
        ).then( (authUser)=> {
            console.log(authUser);
        })
        .catch( (error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then ( (authUser) => {
            console.log(authUser);
        })
        .catch((error) => alert(error.message));
    };


  return (
    <div className='signinScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='emial'/>
            <input ref={passwordRef} placeholder='Passowrd' type='password'/>
            <button
            onClick={signIn} 
            type='submit'>Sign In</button>

            <h4> <span className='signinScreen__gray'>New to Netflix? </span>
                <span
                onClick={register} 
                className='signinScreen__link'>
                    Sign Up Now!
                </span>
            </h4>
        </form>
    </div>
  )
}

export default SigninScreen