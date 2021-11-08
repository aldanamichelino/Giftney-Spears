import React, { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import giftneyLogo from '../../assets/static/britney.svg';
import { CartWidget } from '../Widgets/CartWidget/CartWidget';
import { CartContext } from '../../contexts/CartContext';
import { UserAuthContext } from "../../contexts/UserAuthContext";

export const NavBar = () => {

    const { cart } = useContext(CartContext);
    const { isAuthenticated, logout } = useContext(UserAuthContext);

    return (
        <>
        <header className="header flex justify-center relative">
                {!isAuthenticated || <Link to="/" className="header__logout" onClick={logout}>Cerrar sesión</Link>}
            <div className="header__container grid grid-cols-12 items-end mt-4">
                <Link to="/" className="header__logo flex items-end col-span-3">
                    <img src={giftneyLogo} alt="Logo de Giftney Spears" className="header__logo"/>
                    <h1 className="header__title">Giftney Spears</h1>
                </Link>

                {
                    isAuthenticated &&
                    <>
                        <nav className="header__nav justify-around col-span-7 flex self-end mb-4 inconsolata">
                            <div>
                                <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/indumentaria">Indumentaria</NavLink>
                                <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/perfumes">Perfumes</NavLink>
                                <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/discos">Discos</NavLink>
                                <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/accesorios">Accesorios</NavLink>
                                <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/freebritney">Free Britney</NavLink>
                            </div>
                        </nav>

                        <Link className={`relative justify-self-end col-span-2 ${cart.length > 0 ? 'flex' : 'hidden'}`} to="/carrito">
                            <CartWidget/>
                        </Link>
                    </>
                }
            </div>
        </header>  
        </>
    )
}
