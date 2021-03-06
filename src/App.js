import './App.scss';
import Cats from './class/Cats';
import { Route, Switch } from 'react-router-dom';
import FuncCats from './function/FuncCats'
import ScrollCats from './infiniteScroll/ScrollCats'
import ErrorBoundary from './class/components/ErrorBoundary'

// function App() {
//   // const product = {
//   //   name: 'Awesome Product',
//   //   description: 'this is good!',
//   //   price: 49000,
//   // }
//   return (
//     <div className="App">
//       <Switch>
//         <Route path="/" exact>
//           <main>
//             <Cats />
//           </main>
//         </Route>
//         <Route path="/func">
//           <main>
//             <ErrorBoundary>
//               <FuncCats />
//               {/* <Product /> */}
//             </ErrorBoundary>
//           </main>
//         </Route>
//         <Route path="/scroll">
//           <main>
//             <ScrollCats />
//           </main>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

function App() {
  // const product = {
  //   name: 'Awesome Product',
  //   description: 'this is good!',
  //   price: 49000,
  // }
  return (
    <div className="App">
      <main>
        <ErrorBoundary>
          <FuncCats />
          {/* <Product /> */}
        </ErrorBoundary>
      </main>
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

// function Product({ product }) {


//   return (
//     <div className="product">
//       <span>Product: {product.name}</span>
//       <span>Description: {product.description}</span>
//       <span>Price: {product.price}</span>
//     </div>)
// }

// function ErrorFallback() {
//   return (
//     <div>
//       ?????? ????????? ???????????? ?????? ????????? ??????????????????. ??????????????? ???????????? ?????? ????????? ????????? ???????????????
//       <br />
//       <button onClick={() => {
//         window.location.reload()
//       }}>
//       </button>
//     </div>
//   )
// }