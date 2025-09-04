
import React, { Suspense } from 'react';
import Book from '../Book/Book';



const Books = ({ allBooksData }) => {


    return (
        <div>
            <h1 className='text-center font-bold text-5xl mb-5'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        allBooksData.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;