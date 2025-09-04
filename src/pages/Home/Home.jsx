import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const allBooksData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Books allBooksData={allBooksData}></Books>
        </div>
    );
};

export default Home;