import logo from './logo.svg';
import './App.css';
import Product from './components/Product.js'
import Cats from './components/Cats';



const product = {
  name: 'cat tower',
  price: 129_000,
  brand: 'coupang',
};

function App() {
  return (
    <div className="App">
      <main>
        <Product name="react" lastName="Michael" firstName="Jackson" />
        <Cats />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
