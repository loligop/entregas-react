import cartIcon from '../assets/cart-icon.png';
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <Link type="button" className="btn btn-light"  to='/cart'>
            <img src={cartIcon} className="cartIcon" alt="carrito" width={24} />
            <span className='cartCounter'>{1}</span>
        </Link>
        );
    }

    export default CartWidget;