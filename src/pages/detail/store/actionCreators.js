import * as constant from './ActionTypes';
import axios from 'axios';

const changDetail = () =>({
	type: constant.CHANGE_DETAIL,

})

export const getDetail = () =>{
	return (dispatch) =>{
		axios.get('/api/detail.json').then((res) =>{
			const result = res.data.data;
			dispatch(changDetail(?, ?));
		})
	}
}