import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const [active,setActive] =useState("");

    const handleClick = (id) =>{
        setActive(id);
    }

    const links = <>
        <Link to='/' onClick={()=>handleClick("home")}><li id='home' className={`m-2 text-[18px] font-semibold 
        ${active==="home"?" border-4 border-[#23BE0A] box-content rounded-xl px-4 py-2 text-[#23BE0A]" : ""}
        `}>Home</li></Link>
        <Link to='/listedBooks'onClick={()=>handleClick("listedBooks")}><li id='listedBooks' className={`m-2 text-[18px] font-semibold 
        ${active==="listedBooks"?"border-4 border-[#23BE0A] box-content rounded-xl px-4 py-2 text-[#23BE0A]" : ""}
        `}>Listed Books</li></Link>
        <Link to='/pagesToRead'onClick={()=>handleClick("pagestoread")}><li id='pagestoread' className={`m-2 text-[18px] font-semibold 
        ${active==="pagestoread"?"border-4 border-[#23BE0A] box-content rounded-xl px-4 py-2 text-[#23BE0A]" : ""}
        `}>Pages to Read</li></Link>
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