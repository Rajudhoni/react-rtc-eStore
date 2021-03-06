import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {auth} from './firebase/firebase';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/signin-and-signup/Signin-and-signup';




class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }

  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log("CurrentUserInfo: ", user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />

     </Switch>
    </div>
  );
  }
}

export default App;
