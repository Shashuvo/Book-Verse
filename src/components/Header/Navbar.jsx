import React from 'react';

const Navbar = () => {

    const links = <>
        <li className='m-2 text-[18px] font-semibold'>Home</li>
        <li className='m-2 text-[18px] font-semibold'>Listed Books</li>
        <li className='m-2 text-[18px] font-semibold'>Pages to Read</li>
    </>

    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Verse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn w-[124px] h-[57px] bg-[#23BE0A] text-white rounded-xl text-[18px]">Sign In</a>
                <a className="btn w-[124px] h-[57px] bg-[#59C6D2] text-white rounded-xl text-[18px]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;