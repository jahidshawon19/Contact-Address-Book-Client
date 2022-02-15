import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllContacts = () => {
    const [contacts, setContacts] = useState([])
    const [displayContacts, setDisplayContacts] = useState([]) // for search

    const [pageCount, setPageCount] = useState(0) // inititally set 0 

    const [page, setPage] = useState(0)

    const size = 5 // per page 5 data 

    useEffect(() =>{
        fetch(`http://localhost:5000/contacts?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setContacts(data.contacts) 
            setDisplayContacts(data.contacts)
            const count = data.count 
            const numberOfPage = Math.ceil(count/size)
            setPageCount(numberOfPage)
        })
    }, [page]) //hitting the useEffect corresponding to change pages.


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
            <div className="container">
                <h6 className='text-center mt-4 text-danger'>Contacts Available Per Page: {contacts.length}</h6>
                <div className="row mt-3 ml-5">
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
                    <table class="table">
                            <thead class="thead-light ">
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
                                                    <Link to={`/update/${cont._id}`} className='btn btn-warning btn-sm'><i class="fas fa-user-edit"></i></Link> ||
                                                     <button   
                                                    onClick={()=> handleDeleteContact(cont._id)}
                                                    className='btn btn-danger btn-sm'><i class="fas fa-user-times"></i></button>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                
                                 
                                </tbody>
                    </table>

                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(index => <button onClick={()=> setPage(index)} className='btn btn-info btn-sm m-1'>{index}</button>)
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllContacts;