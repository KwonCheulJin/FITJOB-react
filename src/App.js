import './App.scss';
import Cats from './class/Cats';
import { Route, Switch } from 'react-router-dom';
import FuncCats from './function/FuncCats'
import ScrollCats from './infiniteScroll/ScrollCats'
import ErrorBoundary from './class/components/ErrorBoundary'

function App() {
  const product = {
    name: 'Awesome Product',
    description: 'this is good!',
    price: 49000,
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <main>
            <Cats />
          </main>
        </Route>
        <Route path="/func">
          <main>
            <FuncCats />
            <ErrorBoundary errorFallback={ErrorFallback}>
              <Product />
            </ErrorBoundary>
          </main>
        </Route>
        <Route path="/scroll">
          <main>
            <ScrollCats />
          </main>
        </Route>
      </Switch>
    </div>
  );
}




// function App() {
//   const [fillNumber, setFillNumber] = useState(1)
//   const counterRef = useRef(null)
//   const handleClick = () => {
//     setFillNumber((previousNumber) => previousNumber + 1)
//   }
//   return (
//     <main>
//       <Counter fillNumber={fillNumber} ref={counterRef} />
//       <button onClick={handleClick}>
//         Plus FillNumber 1
//       </button>
//     </main>
//   )
// }



export default App;

function Product({ product }) {


  return (
    <div className="product">
      <span>Product: {product.name}</span>
      <span>Description: {product.description}</span>
      <span>Price: {product.price}</span>
    </div>)
}

function ErrorFallback() {
  return (
    <div>
      상품 정보를 불러오는 도중 에러가 발생했습니다. 새로고침을 원하시는 경우 아래의 버튼을 눌러주세요
      <br />
      <button onClick={() => {
        window.location.reload()
      }}>
      </button>
    </div>
  )
}