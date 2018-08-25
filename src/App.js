import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
// component={Home}
import store from './store';


class App extends Component {
  render() {
    return (
     	<Provider store={store}>
      		<BrowserRouter>
      			<div>
      				<Header />
      				<Route path='/' exact component={Home}></Route>
      				<Route path='/:id' exact component={Detail}></Route>
      			</div>
      		</BrowserRouter>
  		</Provider>
    );
  }
}

export default App;
