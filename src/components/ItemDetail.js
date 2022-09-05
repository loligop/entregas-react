import * as React from 'react';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {
    return(
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title} <br/> USD {item.price}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
            </Card.Body>
    </Card>
    )
}
export default ItemDetail;