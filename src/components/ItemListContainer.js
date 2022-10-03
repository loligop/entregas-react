import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

// FIREBASE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

import { getAllItems as getProductos, getItemsByCategory} from './ItemDetailContainer'
import { useParams } from 'react-router-dom';

    const ItemListContainer = () => {
        const [productsInfo, setproductsInfo] = useState([]);
    
        const getItems = async () => {
            const q = query(
                collection(db, 'products') /* , where('genre', '==', 'metal') */
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setproductsInfo(docs);
            // console.log(docs);
        };
    
        useEffect(() => {
            getItems();
        }, []);
        
        const { categoryid } = useParams();

        useEffect(() => {
            if (categoryid === undefined) {
            getProductos().then(respuestaPromise => {
                setproductsInfo(respuestaPromise);
            }); } else {
            getItemsByCategory(categoryid).then(respuestaPromise => {
                setproductsInfo(respuestaPromise);
            }); }   
        }, [categoryid]);

        return (
            <div className='CardListContainer mt-3'>
                <div className='row'>
                    {productsInfo.map((item) => {
                        return (
                            <div key={item.id} className="col-4">
                                <ItemList productsInfo={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
    
    export default ItemListContainer;