import React, { useState } from "react";

function ItemCount({ stock, initial }) {

    const [counter, setCounter] = useState(1);

    const maxStock = parseInt(stock);

    const handlerCounterUp = () => {
        if (maxStock === counter){
            return;
        }
        setCounter(counter + 1);
    };

    const handlerCounterDown = () => {
    if (counter === 0){
        return;
    }
    setCounter(counter - 1);
};

const onAdd = () => {
    alert('Usted agregó ' + counter + ' productos al carrito.');
};

    return (
        <div className="App">
            <p>{counter}</p>
            <button id="counterUp" onClick={handlerCounterUp}>+</button>
            <button id="counterDown" onClick={handlerCounterDown}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
