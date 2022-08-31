// function Item({ item }) {
//     // Desarrolla la vista de un ítem donde item es de tipo
//     // { id, title, price, pictureUrl }
//    }
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
	return (
    <Card style={{ width: '18rem' }}>
        <Button variant="transparent" href={item.image}>
            <Card.Img variant="top" src={item.image} />
        </Button>
        <Card.Body>
            <Card.Title>{item.title} <br/> USD {item.price}</Card.Title>
                <Card.Text>
                {item.description}
                </Card.Text>
        </Card.Body>
    </Card>
	);
};

export default Item;
