import britney from './britney.svg';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App flex flex-col justify-between">
      <header className="App-header">
      </header>
      <main className="App-main">
        <div className="flex flex-col items-center">
          <img src={britney} className="App-logo" alt="britney-logo" />
          <h1 className="title">Giftney Spears</h1>
          <h2 className="subtitle">Coming soon!</h2>
        </div>
      </main>
      <footer className="App-footer">
        <div className="flex flex-col">
          <h3>#FreeBritney</h3>
          <p>Desarrollo de Aldana Michelino</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
