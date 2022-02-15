import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const UpdateContact = () => {
    const [contact, setContact] = useState({})
    const {id} = useParams() 
    useEffect(() =>{
        const url = `https://aqueous-lake-31184.herokuapp.com/contacts/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setContact(data))
    }, [])

    // update contact 
    const handleFirstNameChange = e => {
        const updatedFirstName = e.target.value 
        const updatedContact = {firstName:updatedFirstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handleLastNameChange = e => {
        const updatedLastName = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:updatedLastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handleCompanyNameChange = e => {
        const updatedCompanyName = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: updatedCompanyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:updatedEmail, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handleTelephoneNumberChange = e => {
        const updatedTelePhoneNumber = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: updatedTelePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }
    const handleMobilePhoneNumberChange = e => {
        const updatedMobilePhoneNumber = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:updatedMobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }
    const handleCountryChange = e =>{
        const updatedCountry = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:updatedCountry , city:contact.city, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handleCityChange = e =>{
        const updatedCity = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:updatedCity, state:contact.state, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handleStateChange = e =>{
        const updatedState = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:updatedState, photoURL:contact.photoURL}
        setContact(updatedContact)
    }

    const handlePhotoURLChange = e =>{
        const updatedPhotoURL = e.target.value 
        const updatedContact = {firstName:contact.firstName, lastName:contact.lastName, companyName: contact.companyName, email:contact.email, telePhoneNumber: contact.telePhoneNumber,  mobilePhoneNumber:contact.mobilePhoneNumber, country:contact.country , city:contact.city, state:contact.state, photoURL:updatedPhotoURL}
        setContact(updatedContact)
    }

    const handleUpdateContact = e =>{
        const url = `https://aqueous-lake-31184.herokuapp.com/contacts/${id}`
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(contact)
        })
            .then(res=>res.json())
            .then(data =>{
                if(data.modifiedCount > 0){
                    alert('Contact Updated Successfully')
                    setContact({})
                }
            })
        e.preventDefault()
    }
    return (
        <>
        <Navbar></Navbar>
           
            <div className="container">
            <h4 className='text-center text-dark mt-5'>Update Contact</h4>
           
                <div className="row">
                    <div className="col-lg-8">
                        <form onSubmit={handleUpdateContact}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" onChange={handleFirstNameChange} value={contact.firstName || ''} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" onChange={handleLastNameChange} value={contact.lastName || ''}  />
                        </div>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" className="form-control" onChange={handleCompanyNameChange} value={contact.companyName || ''} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={handleEmailChange} value={contact.email || ''}  />
                        </div>
                     
                        <div className="form-group">
                            <label>Telephone Number</label>
                            <input type="text" className="form-control" onChange={handleTelephoneNumberChange} value={contact.telePhoneNumber || ''} />
                        </div>
                        <div className="form-group">
                            <label>Mobile Phone Number</label>
                            <input type="text" className="form-control" onChange={handleMobilePhoneNumberChange} value={contact.mobilePhoneNumber || ''}  />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" onChange={handleCountryChange} value={contact.country || ''}    />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" onChange={handleCityChange} value={contact.city || ''} />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type="text"  className="form-control" onChange={handleStateChange}
                            value={contact.state || ''}  />
                        </div>
                        <div className="form-group">
                            <label>Photo URL</label>
                            <input type="text" className="form-control" onChange={handlePhotoURLChange}
                            value={contact.photoURL || ''}   />
                        </div>

                        <button type="submit" className="btn btn-warning">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateContact;