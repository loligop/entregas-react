import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import useCartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';


function Cart() {
    const { cart, removeFromCart, clearCart, itemsTotal, precioTotal } = useCartContext();

    const handleVaciar = () => {
      alert(`Carrito vacío`);
      clearCart();
    } 

    const handleRemove = () => {
      cart.forEach(itemCart => {
        alert(`${itemCart.cant} ${itemCart.title} se quitó del carrito`);
        removeFromCart(itemCart.id)
      })
    }

    if (cart.length === 0) {
      return <section id="Carrito" className="py-5 text-center container">
      <div className="row py-lg-5">
          <div className="col-12">
          <p>No hay items en su carrito</p>
          <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size="1x" /> Volver al catálogo</Link>
        </div>
      </div>
    </section>
    }
    else { 
      return (
        <section id="carrito" className="py-5 text-center container">
          <div className='col-12'>
            <Link to="/"><FontAwesomeIcon icon={faChevronLeft} size="1x" /> Volver al catálogo</Link></div> 
              <div className="p-5">
                <div className="container">
                  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
                    {cart.map( itemCart => {
                      return (
                        <Container key={itemCart.id}>
                          <Card className="p-3 mb-3 mr-2 ml-2 text-center">
                            <Card.Title>{itemCart.title} x{itemCart.cant}</Card.Title>
                            <Card.Img variant="top" src={itemCart.img} />
                            <Card.Body>
                              <div>
                                <p>
                                <strong>Precio: </strong>${itemCart.price}
                                <br/>
                                <strong>Subtotal: </strong>({itemCart.cant} x ${itemCart.price}) = ${itemCart.price * itemCart.cant}
                                </p>
                              </div>
                              <Button onClick={handleRemove} className="btn btn-dark">
                              <FontAwesomeIcon icon={faTimes} size="1x" />
                                <span className="p-1">Quitar producto</span>
                              </Button>
                            </Card.Body>
                          </Card>
                        </Container>
                        )
                      })}
                  </div>
                </div>
              </div>
              <div className="row py-lg-5">
                <div className='col-6'>
                  <h6><strong>Total de items:</strong> {itemsTotal()}</h6>
                </div>
                <div className='col-6'>
                  <h6><strong>Costo Total:$ </strong> {precioTotal()}</h6>
                </div>
                <div className='col-12'>
                  <Button className="btn btn-danger" onClick={handleVaciar}> Vaciar carrito</Button>
                  <Link to="/checkout" style={{marginLeft:"20px"} }><Button className="bg-success ml-3">Proceder al pago</Button></Link> 
                </div>
            </div>
        </section>
      )
    }
  }

export default Cart