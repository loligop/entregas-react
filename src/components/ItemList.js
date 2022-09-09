import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import { Link } from 'react-router-dom';


const ItemList = () => {
    const [items, setItems] = useState([]);

	useEffect(() => {
		axios('https://fakestoreapi.com/products/')
        .then((res) =>
            setItems(res.data)
		);
	}, []);
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row justify-content-center'>
                {items.map((items) => {
                    return (
                        <div key={items.id} className='col-4'>
                            <Link to={`/detail/${items.id}`} className='Link'>
                                <Item item={items} />
                            </Link>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
        );
};

export default ItemList;