import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} =useParams();
    const bId =parseInt(id);
    const bookData = useLoaderData();
    const bookDetails = bookData.find(book=> book.bookId === bId)
    const {bookName,image}=bookDetails
    return (
        <div>
            <h1>Here is your book deatils</h1>
            <h1>{bookName}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default BookDetails;