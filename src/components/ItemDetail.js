import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (counter) => {
        setGoToCart(true);
        alert('Usted agregó ' + counter + ' productos al carrito.');
    };

    console.log(goToCart);
    return(
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name} <br/> {item.status}</Card.Title>
                    <Card.Text>
                    {item.occupation}
                    </Card.Text>
            </Card.Body>
            {
                goToCart ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock='5' initial='1' onAdd={onAdd}/>
            }
    </Card>
    )
}
export default ItemDetail;