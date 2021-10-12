import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Home.css';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Home</h2>
            <h4>Welcome {user?.displayName}</h4>
        </div>
    );
};

export default Home;