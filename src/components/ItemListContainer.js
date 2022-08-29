const ItemListContainer = (props) => {
    return (
        <ul className="cartItemListContainer">
            <li>Producto 1</li>
            <li>Producto 2</li>
            <li>Producto 3</li>
        </ul>,
        <p className="headerUsername">Bienvenido {props.greeting} </p>
        );
    }

    export default ItemListContainer;