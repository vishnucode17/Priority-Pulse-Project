import react from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from "react-router-dom"
import City from './city'
import Display from './index'
const App=()=>{
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Display}/>
        <Route path="/city" component={City}/>
      </Switch>
      </BrowserRouter>
    );
  }
export default App;