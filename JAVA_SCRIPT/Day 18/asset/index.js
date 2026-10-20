const fetchdatas = async () => {
    const datas= await fetch("https://dummyjson.com/products")

    const getdata= await datas.json()

    console.log(getdata);
    
    const products=
    
}

fetchdatas()