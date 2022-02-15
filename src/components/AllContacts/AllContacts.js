import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllContacts = () => {
    const [contacts, setContacts] = useState([])
    const [displayContacts, setDisplayContacts] = useState([]) // for search

    useEffect(() =>{
        fetch('http://localhost:5000/contacts')
        .then(res=>res.json())
        .then(data=>{
            setContacts(data) 
            setDisplayContacts(data)
        })
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

    const handleSearchByCountry = e =>{
        const searchItem = e.target.value 
        const matchItem = contacts.filter(cont => cont.country.toLowerCase().includes(searchItem.toLowerCase()))

        setDisplayContacts(matchItem)


    }
    const handleSearchByCity = e =>{
        const searchItem = e.target.value 
        const matchItem = contacts.filter(cont => cont.city.toLowerCase().includes(searchItem.toLowerCase()))

        setDisplayContacts(matchItem)


    }
    const handleSearchByState = e =>{
        const searchItem = e.target.value 
        const matchItem = contacts.filter(cont => cont.state.toLowerCase().includes(searchItem.toLowerCase()))

        setDisplayContacts(matchItem)


    }
    return (
        <div>
            <div className="container-fluid">
                <h5 className='text-center mt-3 text-secondary'>Contacts Available: {contacts.length}</h5>
                <div className="row">
                    <div className="col-lg-4">
                        <input type="text" onChange={handleSearchByCountry} className='form-control' placeholder='Search by Country'/>
                    </div>
                    <div className="col-lg-4">
                        <input type="text" onChange={handleSearchByCity} className='form-control' placeholder='Search by City'/>
                    </div>
                    <div className="col-lg-4">
                        <input type="text" onChange={handleSearchByState} className='form-control' placeholder='Search by State'/>
                    </div>
                </div>
                <div className="row mt-3">
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
                                        displayContacts.map((cont)=>(
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