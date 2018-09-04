import * as constant from './ActionTypes';
import axios from 'axios';

const changDetail = (result) =>({
	type: constant.CHANGE_DETAIL,
	detaillist: result.articleList,
})

export const getDetail = () =>{
	return (dispatch) =>{
		axios.get('/api/home.json').then((res) =>{
			const result = res.data.data;
			dispatch(changDetail(result));
		}).catch(() => ( 
	    	console.log('err')
	    ))
	}
}
