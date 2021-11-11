import './sass/App.scss';
import './index.css';

import { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { CartProvider } from './contexts/CartContext';
import { UIProvider } from './contexts/UIContext';
import { UserAuthContext } from './contexts/UserAuthContext';
import { UserAuthenticate } from './components/Auth/UserAuthenticate/UserAuthenticate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart, faEye, faBackward, faHome, faTrash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { SignUp } from './components/Auth/SignUp/SignUp';

library.add(fab, faShoppingCart, faHeart, faEye, faBackward, faHome, faTrash, faExclamationCircle);


const App = () => {

  const {isAuthenticated} = useContext(UserAuthContext);

  return (
    <div className="App flex flex-col justify-between">

      <UIProvider>
        <CartProvider>

          <BrowserRouter>
            <NavBar/>

            <Switch>
              {isAuthenticated ?
                  <>
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
                    <Route exact path="/checkout">
                      <Checkout/>
                    </Route>
                    <Route path="*">
                      <Redirect to="/"/>
                    </Route>
                  </>
                :
                <>
                  <Route exact path="/">
                    <UserAuthenticate/>
                  </Route>
                  <Route exact path="/signup">
                    <SignUp/>
                  </Route>
                  <Route path="*">
                    <Redirect to="/"/>
                  </Route>
                </>
              }
            </Switch>

            <Footer/>
          </BrowserRouter>
          
        </CartProvider>
      </UIProvider>
      
    </div>
  );
}

export default App;
