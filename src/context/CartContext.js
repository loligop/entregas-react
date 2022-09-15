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

    const contextFunction = () => {}
    return (
        <Provider value={ { contextFunction, cart, addToCart, clearCart, isInCart, removeFromCart } }>
        {children}
        </Provider>
        
    )

}

export default useCartContext;