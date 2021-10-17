import './sass/App.scss';
import './index.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import React, { useState, useEffect } from 'react';
import { CartContext } from './contexts/CartContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart, faEye, faBackward, faHome} from '@fortawesome/free-solid-svg-icons';
import react from 'react';

library.add(fab, faShoppingCart, faHeart, faEye, faBackward, faHome);

const init = JSON.parse(localStorage.getItem('cart')) || [];


const App = () => {

  const [cart, setCart] = useState(init);

  const addItemToCart = (item) => {
    setCart( [...cart, item] );
  }

  const removeItemFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  }

  const totalAmount = () => {
    return cart.reduce((acc, item) => acc + item.amount, 0);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App flex flex-col justify-between">
      <CartContext.Provider value={
        {cart, addItemToCart, removeItemFromCart, totalAmount}
      }>
        <BrowserRouter>

          <NavBar/>

          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/productos/:categoryId">
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/carrito">
              <Cart/>
            </Route>
            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>

          <Footer/>

        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
