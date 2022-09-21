import React, { useEffect, useState } from 'react';
import DBproducts from '../db/DBproducts';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function getProducto(itemid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemid) {
            const arrayFiltered = DBproducts.find((item) => {
                return item.id === itemid;
            });
            resolve(arrayFiltered);
            } else {
            resolve(DBproducts);
            }
        }, 2000);
    });
}

function ItemDetailContainer( {greeting, items} ) {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
    getProducto(parseInt(itemid)).then(respuestaPromise => {
        setProducto(respuestaPromise);
    });
    }, [itemid]);

    return (
        <section id="menu" className="py-5 text-center container">
            <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size="1x" /> Volver al catálogo</Link>
            <div className="p-5">
                <div className="container">
                    <div className="">
                        <ItemDetail detalle={producto} />
                    </div>
                </div>
            </div>
        </section>
        );
    }
    
    export default ItemDetailContainer;