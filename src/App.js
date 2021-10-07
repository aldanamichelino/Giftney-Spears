import './sass/App.scss';
import './index.css';
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
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
