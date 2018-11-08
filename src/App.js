import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/loadable.js';
import Login from './components/pages/login/Login';
import Medium from './components/medium/Medium';
import store from './store';

class App extends Component {
  render() {
    return (
     	<Provider store={store}>
      		<BrowserRouter>
      			<div style={{ height: '100%', overflowX: 'hidden'}}>
              <Route path='/' exact component={Home}></Route>
      				<Route path='/login' exact component={Login}></Route>
      				<Route path='/detail' exact component={Detail}></Route>
      				<Route path='/users' exact component={Medium}></Route>
      			</div>
      		</BrowserRouter>
  		</Provider>
    );
  }
}

export default App;
