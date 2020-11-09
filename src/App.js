import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Route,Switch} from 'react-router-dom';


const Hatspage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' component={Hatspage} />
     </Switch>
    </div>
  );
}

export default App;
