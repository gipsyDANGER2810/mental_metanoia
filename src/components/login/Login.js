import React, { useState } from 'react';
import './Login.css'
import logo from '../../photos/logo2.png';

function Login() {


    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        sex: '',
        date: '',
        email: '',
        password: ''
    })

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })


    const onSignUpHandler = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const onLoginHandler = (e) =>{
        setLoginData(()=>({
            ...loginData,
            [e.target.name]:e.target.value
        }))
    }

    const handleSignUpClick = (event) => {
        event.preventDefault();
        setShowRegisterForm(true);
    }


    const handleLoginClick = (event) => {
        event.preventDefault();
        setShowRegisterForm(false);

    }

    const signUp = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const login = (e) => {
        e.preventDefault();
        console.log(loginData)
    }



    return (
        <div className='container-fluid'>
            <form className='login_form' >
 
                <div className="login_form_left">
                    <img src={logo} alt=''></img>
                </div>
                <div className="login_form_right">
                    {showRegisterForm && (
                        <>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">First Name</label>
                                <input type="text" class="form-control" name='firstName' onChange={onSignUpHandler} required/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">Last Name</label>
                                <input type="text" class="form-control" name='lastName' onChange={onSignUpHandler} required/>
                            </div>
                            <select class="form-select" aria-label="Default select example" name='sex' onChange={onSignUpHandler} required>
                                <option selected>Sex</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" name='date' onChange={onSignUpHandler} required/>
                            </div>
                            <div class="mb-3">

                                <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name='email' onChange={onSignUpHandler} required/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">Password</label>
                                <input type='password' class="form-control" id="exampleFormControlInput1" name='password' onChange={onSignUpHandler} required/>

                            </div>

                        </>)}



                    {!showRegisterForm &&
                        <>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name='email' onChange={onLoginHandler} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">Password</label>
                                <input type='password' class="form-control" id="exampleFormControlInput1" name='password' onChange={onLoginHandler} />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={login}>Login</button><a href='/'>Forgot Password</a>
                            <div className='forget_password'>
                                <label><input type="checkbox" />Remember Me</label>
                            </div>
                            <div className="register">
                                <p>Dont have an Account? <a href='/' onClick={handleSignUpClick}> Sign Up</a></p>
                            </div>
                        </>

                    }
                    {showRegisterForm &&
                        <>
                            <button type="submit" class="btn btn-primary" onClick={signUp}>Sign Up</button>
                            <a href='/' onClick={handleLoginClick}>Login instead?</a>
                        </>
                    }


                </div>

            </form>
        </div>
    )


}


export default Login
