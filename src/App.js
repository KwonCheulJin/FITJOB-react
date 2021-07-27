import './App.scss';
import Cats from './class/Cats';
import { Route, Switch } from 'react-router-dom';
import FuncCats from './function/FuncCats'
import Counter from './class/components/Counter'
import { useState, useRef } from 'react'
import ScrollCats from './infinityScroll/ScrollCats'

function App() {
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
