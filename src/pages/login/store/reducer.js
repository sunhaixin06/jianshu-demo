import * as constant from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	tabskey: 'sign_in',
})

export default (state = defaultState, action ) =>{
	switch(action.type){
		case constant.Tabs_in :
			return state.set('tabskey', 'sign_in');
		case constant.Tabs_up :
			return state.set('tabskey', 'sign_up');
		default: 
			return state;
	}
}
