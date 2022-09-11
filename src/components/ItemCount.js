import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {

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

    return (
        <div className="App">
            <p className="counterNumer">{counter}</p>
            <button id="counterUp" onClick={handlerCounterUp}>+</button>
            <button id="counterDown" onClick={handlerCounterDown}>-</button>
            <button disabled={counter <= 0} onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
