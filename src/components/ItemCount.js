import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial, onAdd, itemName}) => {
  const [count, setCount] = useState(initial)

  const handleAgregar = () => {
    if (count < stock) {
      setCount(count + 1)
    } else {
        alert(`No hay stock suficiente`);
    } 

  }

  const handleRestar = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

const handleOnAdd = () => {
  alert(`${count} ${itemName} agregado al carrito`);
        onAdd(count);
    } 


  return (
    <>  
      <div className="d-flex mb-3 justify-content-center g-3">
        <Button onClick={handleRestar} className="text-white btn btn-outline-secondary"><FontAwesomeIcon icon={faMinus} size="1x" /></Button>
        <input type="text" className="text-center" readOnly value={count} />
        <Button onClick={handleAgregar} className="text-white btn btn-outline-secondary"><FontAwesomeIcon icon={faPlus} size="1x" /></Button>
      </div>
      <Button onClick={handleOnAdd} className="text-white btn btn-outline-secondary">Agregar al carrito</Button>
    </>
  )
}

export default ItemCount