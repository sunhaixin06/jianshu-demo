import * as constant from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	detaillist: []
});

const DetailList = (state, action) =>{
	return state.merge({
		detaillist: fromJS(action.detaillist)
	});
}

export default (state = defaultState, action ) =>{
	switch(action.type){
		case constant.CHANGE_DETAIL:
			return DetailList(state, action);
	default:
			return state;
	}
}