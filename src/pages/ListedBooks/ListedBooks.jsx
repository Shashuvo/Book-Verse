import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getList, getStoredData } from '../../Utility/addToDB';
import ListedBook from './ListedBook';
import WishListBook from './WishListBook';

const ListedBooks = () => {
    const data = useLoaderData();
    const [sort, setSort] = useState("");
    // handle Readlist
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const storedReadList = getStoredData();
        const convertedStoredReadList = storedReadList.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredReadList.includes(book.bookId))
        setReadList(myReadList);
    }, [])

    const handleReadListSort = (type) => {
        setSort(type);
        if (type === "Pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === "Rating") {
            const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedByRating);
        }
    }


    // Handle Wishlist
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedWishList = getList();
        const convertedStoredWishList = storedWishList.map(id => parseInt(id))
        const myWishList = data.filter(book => convertedStoredWishList.includes(book.bookId))
        setWishList(myWishList);
    }, [])

    const handleWishListSort = (type) => {
        setSort(type);
        if (type === "Pages") {
            const sortedByPage = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setWishList(sortedByPage);
        }
        if (type === "Rating") {
            const sortedByRating = [...wishList].sort((a, b) => b.rating - a.rating);
            setWishList(sortedByRating);
        }
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className=' text-center font-bold text-2xl my-5 bg-black/5 px-[542px] py-[34px] rounded-3xl '>Marked Books : {readList.length}</h2>
                    <details className="dropdown flex items-center justify-center mb-6 ">
                        <summary className="btn m-1 bg-[#23BE0A] text-white rounded-2xl">Sort By : {sort ? sort : ""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleReadListSort("Pages")}>Pages</a></li>
                            <li><a onClick={() => handleReadListSort("Rating")}>Rating</a></li>
                        </ul>
                    </details>
                    {
                        readList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className=' text-center font-bold text-2xl my-5 bg-black/5  px-[542px] py-[34px] rounded-3xl'>My Wishlist : {wishList.length}</h2>
                    <details className="dropdown flex items-center justify-center mb-6 ">
                        <summary className="btn m-1 bg-[#23BE0A] text-white rounded-2xl">Sort By : {sort ? sort : ""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleWishListSort("Pages")}>Pages</a></li>
                            <li><a onClick={() => handleWishListSort("Rating")}>Rating</a></li>
                        </ul>
                    </details>
                    {
                        wishList.map(b => <WishListBook key={b.bookId} b={b}></WishListBook>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;