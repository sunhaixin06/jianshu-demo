import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/common/header/store';
import { reducer as homeReducer } from '../components/pages/home/store';
import { reducer as loginReducer } from '../components/pages/login/store';
import { reducer as detailReducer } from '../components/pages/detail/store';
import { reducer as mediumReducer } from '../components/medium/store';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	login: loginReducer,
	detail: detailReducer,
	medium: mediumReducer
})

export default reducer;