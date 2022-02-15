import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllContacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/contacts')
        .then(res=>res.json())
        .then(data=>setContacts(data))
    }, [])


    // delete contact 
    const handleDeleteContact = id =>{
        const url = `http://localhost:5000/contacts/${id}`
        fetch(url, {
            method: 'DELETE' 
        }) 
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Contact Successfully')
                const restContacts = contacts.filter(cont => cont._id !== id)
                setContacts(restContacts)
            }
        })
    }
    return (
        <div>
            <div className="container-fluid">
                <h5 className='text-center mt-3 text-secondary'>Contacts Available: {contacts.length}</h5>
                <div className="row">
                    <div className="col-lg-12">
                    <table class="table table-striped">
                            <thead class="thead-dark ">
                                <tr>
                                <th scope="col">Photo</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Company </th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Telephone </th>
                                <th scope="col">Mobilephone </th>
                                <th scope="col">Country</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Action</th>
                                
                    
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        contacts.map((cont)=>(
                                            <tr>
                                                <td><img src={cont.photoURL} alt="" height={40} /></td>
                                                <td>{cont.firstName}</td>
                                                <td>{cont.lastName}</td>
                                                <td>{cont.companyName}</td>
                                                <td>{cont.email}</td>
                                                <td>{cont.telePhoneNumber}</td>
                                                <td>{cont.mobilePhoneNumber}</td>
                                                <td>{cont.country}</td>
                                                <td>{cont.city}</td>
                                                <td>{cont.state}</td>
                                                <td>
                                                    <Link to={`/update/${cont._id}`} className='btn btn-warning btn-sm'>Edit</Link> ||
                                                     <button   
                                                    onClick={()=> handleDeleteContact(cont._id)}
                                                    className='btn btn-danger btn-sm'>Delete</button>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                
                                 
                                </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllContacts;