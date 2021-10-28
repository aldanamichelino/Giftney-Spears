import React, { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import giftneyLogo from '../../assets/static/britney.svg';
import { CartWidget } from '../CartWidget/CartWidget';
import { CartContext } from '../../contexts/CartContext';

export const NavBar = () => {

    const { cart } = useContext(CartContext);

    console.log(cart.length)
    return (
        <>
        <header className="header flex justify-center">
            <div className="header__container grid grid-cols-4 items-end">
                <Link to="/" className="header__logo flex items-end">
                    <img src={giftneyLogo} alt="Logo de Giftney Spears" className="header__logo"/>
                    <h1 className="header__title">Giftney Spears</h1>
                </Link>

                <nav className="header__nav col-span-2 justify-around flex self-end mb-4 inconsolata">
                    <div>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/indumentaria">Indumentaria</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/perfumes">Perfumes</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/discos">Discos</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/accesorios">Accesorios</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/freebritney">Free Britney</NavLink>
                    </div>

                </nav>

                <Link className={`relative justify-self-end ${cart.length > 0 ? 'flex' : 'hidden'}`} to="/carrito">
                    <CartWidget/>
                </Link>
            </div>
        </header>  
        </>
    )
}
