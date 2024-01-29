
import './App.css';
import Contact from './Contact';
import Counter from './Counter';
import First from './First';
import LifeCycle from './LifeCycle';
// import ListR from './ListR';
import ListRendering from './ListRendering';
import Uncontrolled from './Uncontrolled';
// import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import  Store  from './Redux/Store';

function App() {
  let name="midhun";
  // const store=createStore();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world </h1>
        {/* <First props={name}/> */}
        {/* <Counter/> */}
        {/* <ListRendering/> */}
        {/* <LifeCycle/> */}
        {/* <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter> */}
        <Provider store={Store}>     
             <Uncontrolled/>
             <Counter/>
             </Provider>

      </header>
    </div>
  );
}

export default App;
