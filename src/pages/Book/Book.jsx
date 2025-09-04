import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { bookId, bookName, author, image, tags, rating, category } = singleBook;

    console.log(bookName, author, image);


    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border border-gray-400 rounded-2xl">
                <figure className=' bg-gray-100 w-[326px] h-[230px] mx-auto mt-6 rounded-2xl'>
                    <img
                        className='h-[166px] w-[125px]:'
                        src={image}
                        alt="Books" />
                </figure>
                <div className="card-body w-[326px] h-[230px] mx-auto ml-6 ">
                    <div className='flex gap-3'>
                        <div className="badge  bg-[#23BE0A]/5 text-[#23BE0A] font-medium text-[16px] h-[33px] w-[125px]">{tags[0]}</div>
                        <div className="badge  bg-[#23BE0A]/5 text-[#23BE0A] font-medium text-[16px] h-[33px] w-[125px]">{tags[1]}</div>
                    </div>
                    <h2 className="card-title font-bold text-2xl">
                        {bookName}
                    </h2>
                    <p className='font-medium text-[16px] opacity-80 border-b border-dashed'>By : {author}</p>
                    <div className=" flex card-actions justify-between">
                        <div className="font-medium text-[16px] opacity-80">{category}</div>
                        <div className='flex gap-[8px] justify-center items-center'>
                            <div className="font-medium text-[16px] opacity-80">{rating}</div>
                            <FaRegStar className="font-medium text-[16px] opacity-80"></FaRegStar>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;