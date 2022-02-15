import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AllContacts from '../AllContacts/AllContacts'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <AllContacts></AllContacts>
        </div>
    );
};

export default Home;