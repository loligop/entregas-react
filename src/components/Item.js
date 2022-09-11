import * as React from 'react';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
	return (
    <Card style={{ width: '18rem' }} className='col-3 m-2'>
        <Card.Img variant="top" src={item.image} />
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
