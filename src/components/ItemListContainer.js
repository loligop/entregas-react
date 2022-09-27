import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

// FIREBASE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// function getProductos(categoryid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (categoryid) {
//             const arrayFiltered = DBproducts.filter((item) => {
//                 return item.category === categoryid;
//             });
//             resolve(arrayFiltered);
//             } else {
//             resolve(DBproducts);
//             }
//         }, 2000);
//     });
// }

// function ItemListContainer( {greeting, items} ) {
//     const [productos, setProductos] = useState([]);
//     const { categoryid } = useParams();
    
//     useEffect(() => {
//     getProductos(categoryid).then(respuestaPromise => {
//         setProductos(respuestaPromise);
//     });
//     }, [categoryid]);

// return (
//     <section id="menu" className="py-5 text-center container">
//         <div className="p-5">
//             <div className="container">
//                 <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
//                     <ItemList items={productos} />
//                 </div>
//             </div>
//         </div>
//      </section>
//     );

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