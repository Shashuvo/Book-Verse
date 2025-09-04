import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around my-4 box-shadow rounded-4xl bg-gray-100 h-[554px]'>
            <div className='flex flex-col justify-center pl-24 gap-14 w-3/4'>
                <h1 className='text-6xl font-bold '>Books to freshen up <br /> your bookshelf.</h1>
                <button className="btn w-[190px] h-[65px] bg-[#23BE0A] text-white rounded-xl text-[20px]">View The List</button>
            </div>
            <div className='flex justify-center p-16'>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;