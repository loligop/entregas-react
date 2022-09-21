import React from 'react'
import { Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ item, stock, name, price, description, picture } ) {
	return (
		<Card className="p-3 mb-3 mr-2 ml-2">
			<Card.Title>{name}</Card.Title>
			<div className='d-flex mb-3 justify-content-end'>
				<Badge>{stock} unidades en STOCK</Badge>
			</div>
			<Card.Img variant="top" src={picture} />
			<Card.Body>
			<Card.Text>
				{description}
			</Card.Text>
			</Card.Body>
			<Link to={`/detail/${item}`}><Button className="btn">Ver producto ${price}</Button></Link>
		</Card>
	)
}

export default Item