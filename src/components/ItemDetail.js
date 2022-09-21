import { useState } from 'react';
import { Badge, Spinner } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';

function ItemDetail({  detalle } ) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCartContext();
  function onAdd(count) {    
    console.log(`Agregaste ${count} ${detalle.title} al carrito`);
    setIsInCart(true);
    addToCart(detalle, count);
    console.log("Agregado al carrito", detalle, count);

}

if (detalle.image === undefined) { 
  return <Spinner animation="border" role="status"> <span className="visually-hidden">Cargando...</span></Spinner>
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={detalle.image} width="700" heith="250" alt={detalle.title} className="img-fluid" />
        </div>
        <div className="col-8 text-center">
          <div className="clearfix">
            <div className="pull-right">
            <h1>{detalle.title}</h1>
            <h3>{detalle.category}</h3>
            </div>
            <div className="d-flex justify-content-end">
              <Badge>stock {detalle.stock}</Badge>
            </div>
          </div>
          <p>
            {detalle.description}
          </p>
          <h6>Precio: ${detalle.price}</h6>
          { isInCart? 
            <Link to="/cart"><Badge bg="success"><h5>Ver carrito</h5></Badge></Link>
            :
            <ItemCount onAdd={onAdd} stock={detalle.stock} initial={1} itemName={detalle.title}/>
        }
          
        </div>
      </div>
  </div>
  )
}

export default ItemDetail