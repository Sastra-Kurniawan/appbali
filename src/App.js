import React from 'react';
import './App.css';
import Register from './Register';
import Home from './Home';
import { BrowserRouter as Router,Switch,Route, } from "react-router-dom";

function App() {
  return (
     <Router>
       <Switch>
         <Route path='/home'>
           <Home/>
         </Route>
         <Route exact path='/'>
           <Register/>
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
