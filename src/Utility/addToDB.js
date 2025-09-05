
// functions to Handle Mark as Read

const getStoredData = () =>{
    const storedDataSTR = localStorage.getItem("readlist");
    if(storedDataSTR){
        const storedBookData = JSON.parse(storedDataSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addDataToDB = (id) =>{
    const storedBookData = getStoredData();
    if(storedBookData.includes(id)){
        alert("Book already exist in Marked list.")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist",data);
    }
}

export {addDataToDB, getStoredData};


// Functions to Handle Wishlist
const getList = () =>{
    const storedListSTR = localStorage.getItem("wishlist");
    if(storedListSTR){
        const storedListData = JSON.parse(storedListSTR);
        return storedListData;
    }
    else{
        return [];
    }
}

const addToWishlist = (id) =>{
    const storedList = getList();
    if(storedList.includes(id)){
        alert("Book already exist in My Wishlist.")
    }
    else{
        storedList.push(id);
        const data = JSON.stringify(storedList);
        localStorage.setItem("wishlist",data);
    }
}

export{addToWishlist,getList};