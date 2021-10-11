import './sass/App.scss';
import './index.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './container/ItemListContainer/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faHeart);


const App = () => {
  return (
    <div className="App flex flex-col justify-between">
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
            <h2>Acá va el ItemDetailContainer</h2>
          </Route>
          <Route exact path="/carrito">
            <h1>Carrito</h1>
          </Route>
          <Route path="*">
            <h2>No existe</h2>
          </Route>
        </Switch>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
