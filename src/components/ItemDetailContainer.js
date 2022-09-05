import React, { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail"

const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

function ItemDetailContainer() {
    const [data, setItems] = useState([]);
    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve (product);
            }, 3000);
        
        });
        getItem.then(res => setItems(res));
    }, [])

    return (
    <ItemDetail item={data} />
    )
}
export default ItemDetailContainer