import React, { useEffect, useState } from 'react';
import DBproducts from '../db/DBproducts';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function getProductos(categoryid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid) {
            const arrayFiltered = DBproducts.filter((item) => {
                return item.category === categoryid;
            });
            resolve(arrayFiltered);
            } else {
            resolve(DBproducts);
            }
        }, 2000);
    });
}

function ItemListContainer( {greeting, items} ) {
    const [productos, setProductos] = useState([]);
    const { categoryid } = useParams();
    
    useEffect(() => {
    getProductos(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
    });
    }, [categoryid]);

    return (
        <section id="menu" className="py-5 text-center container">
            <div className="p-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
                        <ItemList items={productos} />
                    </div>
                </div>
            </div>
         </section>
        );
    }
    
    export default ItemListContainer;