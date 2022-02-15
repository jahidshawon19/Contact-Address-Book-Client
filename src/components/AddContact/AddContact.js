import React, { useRef } from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const AddContact = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const companyNameRef = useRef()
    const emailRef = useRef()
    const telePhoneRef = useRef()
    const mobilePhoneRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const stateRef = useRef()
    const photoURLRef = useRef()


    const handleAddContact = e =>{
        const firstName = firstNameRef.current.value 
        const lastName = lastNameRef.current.value 
        const companyName = companyNameRef.current.value
        const email = emailRef.current.value 
        const telePhoneNumber = telePhoneRef.current.value 
        const mobilePhoneNumber = mobilePhoneRef.current.value  
        const country = countryRef.current.value 
        const city = cityRef.current.value 
        const state = stateRef.current.value 
        const photoURL = photoURLRef.current.value 

        const newContact = {firstName, lastName, companyName, email, telePhoneNumber, mobilePhoneNumber, country, city,state, photoURL}

        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newContact)

        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New Contact Added Successfully')
                e.target.reset() // clear the form after submitting
            }
        })


        e.preventDefault()
    }

    return (
        <>
        <Navbar></Navbar>
            <div className="container">
                <h5 className='text-center text-secondary mt-5'>Add New Contact</h5>
                <div className="row py-3">
                    <div className="col-lg-8">



                    <form onSubmit={handleAddContact}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" ref={firstNameRef}  required />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" ref={lastNameRef} required />
                        </div>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" className="form-control" ref={companyNameRef} required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" ref={emailRef} required />
                        </div>
                     
                        <div className="form-group">
                            <label>Telephone Number</label>
                            <input type="text" className="form-control" ref={telePhoneRef} required />
                        </div>
                        <div className="form-group">
                            <label>Mobile Phone Number</label>
                            <input type="text" className="form-control" ref={mobilePhoneRef} required />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" ref={countryRef} required />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" ref={cityRef} required />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" ref={stateRef} required />
                        </div>
                        <div className="form-group">
                            <label>Photo URL</label>
                            <input type="text" className="form-control" ref={photoURLRef} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddContact;