import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// FIREBASE
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// function getProducto(itemid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (itemid) {
//             const arrayFiltered = DBproducts.find((item) => {
//                 return item.id === itemid;
//             });
//             resolve(arrayFiltered);
//             } else {
//             resolve(DBproducts);
//             }
//         }, 2000);
//     });
// }

export async function getAllItems() {
    const myProducts = collection(db,'products');
    const itemsSnapshot = await getDocs(myProducts);

    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
})};

export async function getItem(id){
    const myProducts = collection(db,'products');
    const itemRef = doc(myProducts, id);
    const itemSnapshot = await getDoc(itemRef);
        return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
        }
};

function ItemDetailContainer( {greeting, items} ) {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    useEffect(() => {
        getItem(itemid).then(respuestaPromise => {
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