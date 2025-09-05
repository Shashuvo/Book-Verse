import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getList, getStoredData } from '../../Utility/addToDB';
import Book from '../Book/Book';
import ListedBook from './ListedBook';
import WishListBook from './WishListBook';

const ListedBooks = () => {
    const data = useLoaderData();
    // handle Readlist
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const storedReadList = getStoredData();
        const convertedStoredReadList = storedReadList.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredReadList.includes(book.bookId))
        setReadList(myReadList);
    }, [])


    // Handle Wishlist
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedWishList = getList();
        const convertedStoredWishList = storedWishList.map(id => parseInt(id))
        const myWishList = data.filter(book => convertedStoredWishList.includes(book.bookId))
        setWishList(myWishList);
    }, [])

    return (
        <div>
            <h1>Here is your listed books.</h1>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className=' text-center font-bold text-2xl my-5'>Marked Books : {readList.length}</h2>
                    {
                        readList.map(book=> <ListedBook key={book.bookId} book={book}></ListedBook>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className=' text-center font-bold text-2xl my-5'>My Wishlist : {wishList.length}</h2>
                    {
                        wishList.map(b => <WishListBook key={b.bookId} b={b}></WishListBook> )
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;