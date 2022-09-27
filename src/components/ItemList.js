import React from 'react'
import Item from './Item';
import { Container } from 'react-bootstrap';
const ItemList = ({ productsInfo }) => {
	return (
			<Container>
        <Item picture={productsInfo.img} stock={productsInfo.stock} item={productsInfo.id} name={productsInfo.title} description={productsInfo.description} price={productsInfo.price} brand={productsInfo.brand}/>
			</Container>
	);
};

export default ItemList