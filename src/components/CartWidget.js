import cartIcon from '../assets/cart-icon.png';

function CartWidget() {
    return (
        <button type="button" className="btn btn-light">
            <img src={cartIcon} className="cartIcon" alt="carrito" width={24} />
            <span className='cartCounter'>1</span>
        </button>
        );
    }

    export default CartWidget;