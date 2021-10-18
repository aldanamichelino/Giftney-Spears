import './sass/App.scss';
import './index.css';

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart, faEye, faBackward, faHome, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faHeart, faEye, faBackward, faHome, faTrash);


const App = () => {

  return (
    <div className="App flex flex-col justify-between">

      <CartProvider>
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
      </CartProvider>
    </div>
  );
}

export default App;
