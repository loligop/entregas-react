import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {


    return (
        <Nav variant="pills" activeKey="1">
            <Nav.Item>
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </Nav.Item>
            <NavDropdown title="Categorías" id="nav-dropdown">
                <NavDropdown.Item eventKey="Manoplas">
                    <NavLink className="nav-link" aria-current="page" to="category/manoplas">Manoplas</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Lentes de Agua">
                    <NavLink className="nav-link" aria-current="page" to="category/lentes-de-agua">Lentes de Agua</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Tablas">
                    <NavLink className="nav-link" aria-current="page" to="category/tablas">Tablas</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Pull Buoy">
                    <NavLink className="nav-link" aria-current="page" to="category/pull-buoy">Pull Buoy</NavLink>
                </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
        </Nav>
    )
}
export default NavBar;