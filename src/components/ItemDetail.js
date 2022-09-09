import * as React from 'react';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {
    return(
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name} <br/> {item.status}</Card.Title>
                    <Card.Text>
                    {item.occupation}
                    </Card.Text>
            </Card.Body>
    </Card>
    )
}
export default ItemDetail;