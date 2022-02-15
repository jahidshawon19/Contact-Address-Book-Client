import React, { useRef } from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const AddContact = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
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
        const email = emailRef.current.value 
        const telePhoneNumber = telePhoneRef.current.value 
        const mobilePhoneNumber = mobilePhoneRef.current.value  
        const country = countryRef.current.value 
        const city = cityRef.current.value 
        const state = stateRef.current.value 
        const photoURL = photoURLRef.current.value 

        const newContact = {firstName, lastName, email, telePhoneNumber, mobilePhoneNumber, country, city,state, photoURL}

        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newContact)

        })
        .then()


        e.preventDefault()
    }

    return (
        <>
        <Navbar></Navbar>
            <div className="container">
                <h3 className='text-center text-secondary mt-5'>Add New Contact</h3>
                <div className="row py-3">
                    <div className="col-lg-8">


                        
                    <form onSubmit={handleAddContact}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" ref={firstNameRef} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" ref={lastNameRef} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" ref={emailRef} />
                        </div>
                     
                        <div className="form-group">
                            <label>Telephone Number</label>
                            <input type="text" className="form-control" ref={telePhoneRef} />
                        </div>
                        <div className="form-group">
                            <label>Mobile Phone Number</label>
                            <input type="text" className="form-control" ref={mobilePhoneRef} />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" ref={countryRef} />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" ref={cityRef} />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" ref={stateRef} />
                        </div>
                        <div className="form-group">
                            <label>Photo URL</label>
                            <input type="text" className="form-control" ref={photoURLRef} />
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