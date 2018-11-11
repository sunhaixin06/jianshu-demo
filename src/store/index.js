import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers =  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux-thunk 配置redux-devtools

// Store 就是保存数据的地方， 你可以把它看成一个容器, 整个应用只能有一个 Store
// Redux 提供 createStore 这个函数, 用来生成 Store
const store = createStore(
	reducer, 
	composeEnhancers(applyMiddleware(thunk)), // action 创建函数
);
// createStore 函数接受另一个函数作为参数，返回新生成的 Store 对象
export default store;

// store.getState() 获取当前值
// store.subscribe(() => {}) 创建一个监听
// store.dispatch(action) 分发任务
