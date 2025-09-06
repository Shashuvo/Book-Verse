import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addDataToDB, addToWishlist } from '../../Utility/addToDB';

const BookDetails = () => {
    // loading book details
    const { id } = useParams();
    const bId = parseInt(id);
    const bookData = useLoaderData();
    const bookDetails = bookData.find(book => book.bookId === bId)
    const { bookName, author, image, category, review, tags, totalPages, rating, publisher, yearOfPublishing } = bookDetails;

    // function to handle mark as read
    const handleMarkAsRead = (id) => {
        addDataToDB(id);
    }

    // function to handle Wishlist
    const handleMyWishlist = (id) => {
        addToWishlist(id);
    }

    return (
        <div>
            <div className='flex gap-12'>
                {/* Image */}
                <div className='shadow-sm bg-black/5 rounded-2xl p-[74px] w-3/4'>
                    <img className='w-[425px] h-[570px]' src={image} alt="Book Image" />
                </div>
                {/* details */}
                <div className="flex w-full flex-col">
                    <div className='flex flex-col gap-[16px]'>
                        <h1 className='font-bold text-[40px]'>{bookName}</h1>
                        <p className='font-medium text-[20]px opacity-80'>By : {author}</p>
                    </div>
                    <div className="divider"></div>
                    <p className='font-medium text-[20]px opacity-80'>{category}</p>
                    <div className="divider"></div>
                    <div>
                        <p><span className='font-bold'>Review : </span> <span className='opacity-70'>{review}</span></p>
                    </div>
                    <div className='mt-7 '>
                        <p><span className='font-bold mr-4'>Tags</span>
                            <div className="badge mr-3  bg-[#23BE0A]/5 text-[#23BE0A] font-medium text-[16px] p-4">#{tags[0]}</div>
                            <div className="badge mr-3  bg-[#23BE0A]/5 text-[#23BE0A] font-medium text-[16px] p-4">#{tags[1]}</div>
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className='flex mb-8 font-semibold mr-[59px] gap-[59px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='opacity-70'>Number of Pages:</p>
                            <p className='opacity-70 '>Publisher:</p>
                            <p className='opacity-70 '>Year of Publishing:</p>
                            <p className='opacity-70 '>Rating:</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className='flex gap-4'>
                        <a onClick={() => handleMarkAsRead(id)} className="btn px-7 py-5 bg-white text-black rounded-xl text-[18px] border-black/30">Mark as Read</a>
                        <a onClick={() => handleMyWishlist(id)} className="btn px-7 py-5 bg-[#59C6D2] text-white rounded-xl text-[18px]">Add to Wishlist</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;