import * as constant from './ActionTypes';
import axios from 'axios';

const addMediumList = (result) =>({
    type: constant.warp_type,
    mediumList: result.articleList,
})

export const getMediumList = () =>{
    return (dispatch) =>{
		axios.get('/api/home.json').then((res) =>{
            const data = res.data.data;
			dispatch(addMediumList(data))
		})
	}
}