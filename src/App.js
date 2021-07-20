import './App.scss';
import Cats from './class/components/Cats';
import { Route, Switch } from 'react-router-dom';
import FuncCats from './function/FuncCats'
// import Counter from './components/Counter'


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
      </Switch>
    </div>
  );
}




// function App() {
//   return (
//     <Counter />)
// }

export default App;
