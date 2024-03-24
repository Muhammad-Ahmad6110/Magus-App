import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MarketPlace from './Components/MarketPlace';
import Staking from './Components/Staking';

function App() {
  return (
    <div>
     {/* <Home/> */}
     <BrowserRouter>
             <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/marketplace" component={MarketPlace} />
                <Route exact path="/staking" component={Staking} />
             </Switch>  
         </BrowserRouter>
    </div>
  );
}

export default App;
