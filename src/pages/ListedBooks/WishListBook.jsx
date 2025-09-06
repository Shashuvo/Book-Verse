import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";

const WishListBook = ({ b }) => {
    const { bookName, image, author, tags, yearOfPublishing, publisher, totalPages, rating, category } = b;
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm border-2 border-black/15 mb-6 ">
            <div className='h-[320px] w-[230px]'>
            <figure className=' p-6 flex items-center justify-center overflow-hidden'>
                <img
                    className=' h-auto w-auto object-contain bg-black/5 rounded-2xl p-6 '
                    src={image}
                    alt="Book Image" />
            </figure>
            </div>
            <div className="card-body gap-4 flex items-start justify-center">
                <div className='flex flex-col gap-4'>
                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p className='font-medium opacity-80'>By : {author}</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-4'>
                            <span className='font-bold pt-1'>Tag</span>
                            <div className="badge  bg-[#23BE0A]/5 text-[#23BE0A] font-medium p-4">#{tags[0]}</div>
                            <div className="badge  bg-[#23BE0A]/5 text-[#23BE0A] font-medium p-4">#{tags[1]}</div>
                        </div>
                        <div className='flex pt-1 gap-2'>
                            <IoLocationOutline className=' size-6' />
                            <p className='opacity-80'>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex gap-2 opacity-60'>
                            <HiUsers className=' size-6' />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className='flex gap-2 opacity-60'>
                            <HiOutlineClipboardList className=' size-6' />
                            <p>Pages: {totalPages}</p>
                        </div>
                    </div>
                </div>
                <div className="divider my-[0px]"></div>
                <div className=' flex gap-4'>
                    <div className="badge rounded-4xl bg-[#328EFF]/15 text-[#328EFF] font-medium  px-5 py-5">Category: {category}</div>
                    <div className="badge rounded-4xl  bg-[#FFAC33]/15 text-[#FFAC33] font-medium px-5 py-5">Rating: {rating}</div>
                    <button className="btn btn-soft btn-success rounded-4xl text-white bg-[#23BE0A] p-5">View details</button>
                </div>
            </div>
        </div>
    );
};

export default WishListBook;