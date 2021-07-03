import logo from './logo.svg';
import './App.css';
import HelloWorld, { helloToday } from './components/HelloWorld.js'


window.localStorage.setItem('productName', 'cat tower');
window.sessionStorage.setItem('productName', 'cat tower');


const product = {
  name: 'cat tower',
  price: 129_000,
  brand: 'coupang',
};

function App() {
  const productNameFromLocalSrotage = window.localStorage.getItem('productName');
  const productNameFromSessionSrotage = window.sessionStorage.getItem('productName');

  return (
    <div className="App">
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
        <p>productNameFromLocalSrotage: {productNameFromLocalSrotage}</p>
        <p>productNameFromSessionSrotage: {productNameFromSessionSrotage}</p>
      </header>
      <main>
        <h1>{helloToday}</h1>
        <HelloWorld product={product} />
        <HelloWorld product={product} />
        <HelloWorld product={product} />
        <HelloWorld product={product} />
      </main>
    </div>
  );
}

export default App;
