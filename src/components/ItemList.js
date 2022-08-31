// function ItemList({ items }) {
//     // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
//    }
   import React, { useState, useEffect } from 'react';
   import Item from './Item';
   
   const ItemList = () => {
       const [items, setItems] = useState([]);
   
       useEffect(() => {
           fetch('https://fakestoreapi.com/products')
               .then((response) => response.json())
               .then((json) => setItems(json));
       }, []);
   
       return (
           <div>
               {items.map((product) => {
                   return <Item key={product.id} item={product} />;
               })}
           </div>
       );
   };
   
   export default ItemList;
   