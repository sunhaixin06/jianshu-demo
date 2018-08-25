import { fromJS} from 'immutable';
import * as constant from './ActionTypes';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendLsit: [],
	carouselList: [],
	articePage: 1,
	articetotal: 1,
	followlist: [],
	showScroll: false,
	Page: 1
});

const changeHomeList = (state, action) =>{
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendLsit: fromJS(action.recommendLsit),
		carouselList: fromJS(action.carouselList),
	});
};

const addMoreList = (state, action) =>{
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'Page': action.nextPage
	});
}

const addArticeList = (state, action) =>{
	return state.merge({
		followlist: action.data,
		articetotal: action.articetotal
	});
}

export default (state = defaultState, action) =>{
	switch(action.type) {
		case constant.change_home_list:
			return changeHomeList(state, action);
		case constant.chnage_page_type:
			return state.set('articePage', action.articePage);
		case constant.add_artice_list:
			return addArticeList(state, action);
		case constant.add_more_list:
			return addMoreList(state, action);
		case constant.toggle_scroll_top:
			return state.set('showScroll', action.show);
		default: 
			return state;
	}
}
