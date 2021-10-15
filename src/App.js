import './sass/App.scss';
import './index.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './container/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './container/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart, faEye, faBackward, faHome} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faHeart, faEye, faBackward, faHome);


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
    </div>
  );
}

export default App;
