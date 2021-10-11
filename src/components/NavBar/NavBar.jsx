import React from "react";
import { Link, NavLink } from 'react-router-dom';
import giftneyLogo from '../../assets/static/britney.svg';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <>
        <header className="header flex justify-center">
            <div className="header__container grid grid-cols-4 items-center">
                <Link to="/" className="header__logo flex items-end">
                    <img src={giftneyLogo} alt="Logo de Giftney Spears" className="header__logo"/>
                    <h1 className="header__title">Giftney Spears</h1>
                </Link>

                <nav className="header__nav col-span-3 justify-around flex self-end inconsolata">
                    <div>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/indumentaria">Indumentaria</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/perfumes">Perfumes</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/discos">Discos</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/accesorios">Accesorios</NavLink>
                        <NavLink className="header__nav__link" activeClassName={'activeLink'} exact to="/productos/freebritney">Free Britney</NavLink>
                    </div>

                    <Link to="/carrito"><CartWidget/></Link>
                </nav>
            </div>
        </header>  
        </>
    )
}
