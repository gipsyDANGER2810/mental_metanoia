import React, { useState } from 'react'
import './ContactUs.css'
function ContactUs() {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
    }

    const onChangeHandler = (e) => {
        setFormData(()=>({
            ...formData,
            [e.target.name] : e.target.value
        }))
    }
    return (
        <div className='contactUs container'>
            <h1 className='text-center'>Get in Touch</h1>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="name" onChange={onChangeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onChange={onChangeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message" onChange={onChangeHandler}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
