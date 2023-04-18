import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData()
    return (
        <div>
            <h1>This is Home</h1>
            <h2>phone length {phones.length}</h2>
        </div>
    );
};

export default Home;