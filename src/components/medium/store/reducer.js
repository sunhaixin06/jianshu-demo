import * as constant from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	mediumList: []
});

const changeMediumList = (state, action) =>{
	return state.merge({
		mediumList: fromJS(action.mediumList),
	});
};

export default (state = defaultState, action) =>{
	switch(action.type) {
		case constant.warp_type:
			return changeMediumList(state, action);
		default: 
			return state;
	}
}
