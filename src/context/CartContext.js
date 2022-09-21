import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

// ADD ITEM TO CART AND IF ALREADY EXIST ADD AUTOMATICALLY

export function CartContextProvider( {children} ) {
    const [cart, setCart] = useState([]);
    const addToCart = ( item, cant ) => {
        if (isInCart(item.id)){
          const newCart = cart.map(cartItem => {
              if (cartItem.id === item.id){
              const copyItem = {...cartItem};
              copyItem.cant += cant;
              return copyItem;
              }
              else 
              return cartItem;
              
          })
          setCart(newCart);
    } 
    else{
        const newItem = {...item, cant};
        setCart([...cart, newItem]);
    }
}

//CHECK IF AN ITEM IS IN CART
const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  
// CHECK A SPECIFIED ITEM IN CART

  const getItemFromCart = (id) => {
    return cart.find((item) => item.id === id);
  };

//CHECK IF AN ITEM IS IN CART

const cantItems = (id) => {   
    const total = 0;
    cart.forEach(item => total + item.cant);
    return total;
    };

function precioTotal() {
    let total = 0;
    cart.map ( (i) => total += i.price * i.cant );
    return total;
  }
    
function itemsTotal() {
    let cantidad = 0;
    cart.map(i => cantidad += i.cant);
    return cantidad;
  }

    

const ItemCartCant = (id) => {
  let productsInCart = cart.find((item) => item.id === id);
  return productsInCart.cant;
};

// REMOVE ITEM FROM CART

    const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter(item =>{
        return item.id !== id;
    });
    setCart(cartFilter);
    }
    
  // CLEAR ALL ITEMS

    const clearCart = () => {
        setCart([]);
    }

    const contextFunction = () => console.log("Contexto listo");

return (
    <Provider value={ { contextFunction, cart, addToCart, removeFromCart, clearCart, isInCart, getItemFromCart, ItemCartCant, cantItems, precioTotal, itemsTotal } }>
      {children}
    </Provider>
)

}

export default useCartContext;