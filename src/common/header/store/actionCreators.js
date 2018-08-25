import * as constant from './ActionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const getChangeList = (data) => ({
	type: constant.change_list,
	data: fromJS(data),
	total: Math.ceil(data.length/10)

});

export const getFocusInputAction = () => ({
    type: constant.focus_type
  
});

export const getBlurInputAction = () => ({
    type: constant.blur_type
  
});

export const getEnterInputLIst = () =>({
	type: constant.enter_type,
});

export const getLeaveInputLIst = () =>({
	type: constant.leave_type,
});

export const getPageInputList = (page) => ({
	type: constant.page_type,
	page
})

export const getFocusInputList = () =>{
	return (dispatch) =>{
		axios.get('/api/headerList.json').then((res) =>{ 
	     	const data = res.data;
	     	dispatch(getChangeList(data.data));
	    }).catch(() => ( 
	    	console.log('err')
	    ))
    }
};

