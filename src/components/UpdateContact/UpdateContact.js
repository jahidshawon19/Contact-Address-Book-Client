import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const UpdateContact = () => {
    const [contact, setContact] = useState({})
    const {id} = useParams() 
    useEffect(() =>{
        const url = `http://localhost:5000/contacts/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setContact(data))
    }, [])

    const handleUpdateContact = e =>{
        e.preventDefault()
    }
    return (
        <>
        <Navbar></Navbar>
            {id} 

            <div className="container">
            <h5 className='text-center text-secondary mt-5'>Update Contact</h5>
           
                <div className="row">
                    <div className="col-lg-8">
                        <form onSubmit={handleUpdateContact}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control"   />
                        </div>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" className="form-control"  />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"   />
                        </div>
                     
                        <div className="form-group">
                            <label>Telephone Number</label>
                            <input type="text" className="form-control"  />
                        </div>
                        <div className="form-group">
                            <label>Mobile Phone Number</label>
                            <input type="text" className="form-control"   />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control"   />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Photo URL</label>
                            <input type="text" className="form-control"  />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateContact;