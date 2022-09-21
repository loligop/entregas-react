import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useCartContext from '../context/CartContext';

function CartWidget(props) {
  const { itemsTotal } = useCartContext();
  return (
    <Link to="/cart" className="text-dark">
      <div className="cart-icon">
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
        { itemsTotal()? <div className="mostrar-cantidad">{itemsTotal()}</div>
        : null }
      </div>
    </Link>
  );
}
export default CartWidget;