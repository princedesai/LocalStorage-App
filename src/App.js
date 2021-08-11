import Signup from './Components/Signup';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import signin from './Components/signin';
import APIdata from './Components/APIdata';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
  <div>
    <BrowserRouter>    
    <Switch>
      <Route exact path="/" component={Signup}/>
      <Route exact path="/signin" component={signin}/>
      <Route exact path="/APIdata" component={APIdata}/>
    </Switch>
    </BrowserRouter>
    </div>
    );
}

export default App;
