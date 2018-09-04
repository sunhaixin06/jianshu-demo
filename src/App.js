import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login/Login';
import store from './store';


class App extends Component {
  render() {
    return (
     	<Provider store={store}>
      		<BrowserRouter>
      			<div style={{ height: '100%'}}>
              <Route path='/' exact component={Home}></Route>
      				<Route path='/login' exact component={Login}></Route>
      				<Route path='/detail' exact component={Detail}></Route>
      			</div>
      		</BrowserRouter>
  		</Provider>
    );
  }
}

export default App;

// import Header from './common/header/Header';
