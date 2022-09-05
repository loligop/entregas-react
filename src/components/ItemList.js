import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
                .then((json) => setItems(json));
            }, 5000);
        
        });
        getData.then(res => setItems(res));
        
    }, []);

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row justify-content-center'>
                    {items.map((product) => {
                        return <Item key={product.id} item={product} />;
                    })}
                </div>
            </div>
        </div>
        );
};

export default ItemList;