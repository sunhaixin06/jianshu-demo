import * as constant from './ActionTypes';
import axios from 'axios';

// 创建 action 对象函数
const addMediumList = (result) =>({
    type: constant.warp_type, // action对象中必有一个type字段代表action类型
    mediumList: result.articleList,
})

export const getMediumList = () => (dispatch) =>{
	axios.get('/api/home.json').then((res) =>{
		const data = res.data.data;
		dispatch(addMediumList(data))
	})
}
			