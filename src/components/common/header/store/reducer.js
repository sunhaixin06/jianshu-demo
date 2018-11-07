import * as constant from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	total: 1,
	login: false,
	otherList: [],
	avatarList: [],
});

const changeList = (state, action) => {
	return state.merge({
		list: action.data,
		total: action.total
	});
};

const othersList = (state, action) => {
	return state.merge({
		otherList: action.data,
		avatarList:action.avatar
	})
}

export default (state = defaultState, action ) =>{
	switch(action.type){
		case constant.focus_type :
			return state.set('focused', true);
		case constant.blur_type :
			return state.set('focused', false);
		case constant.enter_type :
			return state.set('mouseIn', true);
		case constant.leave_type :
			return state.set('mouseIn', false);
		case constant.page_type :
			return state.set('page', action.page);
		case constant.change_list :
			return changeList(state, action);
		case constant.header_others :
			return othersList(state, action);
		case constant.header_login :
		 	return state.set('login', true);
		case constant.header_logup :
		 	return state.set('login', false);
		default:
			return state;
	}
	
}
// immutable对象的get方法去接收的是fromJS中的值  
// 而set方法是会结合之前immutable对象的值和设置的值 返回一个全新的对象