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
        alert("Book already exist in marked list.")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist",data);
    }
}

export {addDataToDB};