import React from "react";
import giftneyLogo from '../../assets/static/britney.svg';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <>
            <header className="header flex justify-center">
               <div className="header__container grid grid-cols-4 items-center">
                    <div className="header__logo flex items-end">
                        <img src={giftneyLogo} alt="Logo de Giftney Spears" className="header__logo"/>
                        <h1 className="header__title">Giftney Spears</h1>
                    </div>

                    <nav className="header__nav col-span-2 flex justify-end self-end inconsolata">
                        <p>Indumentaria</p>
                        <p>Perfumes</p>
                        <p>Discos</p>
                        <p>Accesorios</p>
                        <p>FreeBritney</p>
                    </nav>

                    <CartWidget/>
               </div>
            </header>  
        </>
    )
}
