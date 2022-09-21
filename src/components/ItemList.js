import React from 'react'
import Item from './Item';
import { Container } from 'react-bootstrap';

function ItemList({ items }) {
  return (
    <>
    { items.map(product => {
      return (
        <Container key={product.id}>
            <Item picture={product.image} stock={product.stock} item={product.id} name={product.title} description={product.description} price={product.price}/>
        </Container>
      )
    })}
    </>
  )
}

export default ItemList