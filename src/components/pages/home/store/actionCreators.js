import * as constant from './ActionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHoneData = (result) => ({
	type: constant.change_home_list,
	topicList: result.topicList,
	articleList: result.articleList,
	hotList: result.hotList,
	carouselList: result.carouselList,
});

const addHomeList = (data) => ({
	type: constant.add_artice_list,
	data: fromJS(data),
	articetotal: Math.ceil(data.length/5),
})

const addMoreList = (list, nextPage) => ({
	type: constant.add_more_list,
	list: fromJS(list),
	nextPage

})

export const setTop = () =>{
	let scrollToptimer = setInterval(
	() =>{
		let top = document.body.scrollTop || document.documentElement.scrollTop;
	    let speed = top / 4;
	    if (document.body.scrollTop!==0) {
	        document.body.scrollTop -= speed;
	    }else {
	        document.documentElement.scrollTop -= speed;
	    }
	    if (top === 0) {
	        clearInterval(scrollToptimer);
	    }
	},20)
}

export const getHomeInfo = () =>{
	return (dispatch) =>{
		axios.get('/api/home.json').then((res) =>{
			const result = res.data.data;
			dispatch(changeHoneData(result))
		})
	}
}

export const getMoreList = () =>{
	return (dispatch) =>{
		axios.get('/api/homeList.json').then((res) =>{
			const data = res.data.data;
			dispatch(addHomeList(data))
		})
	}
}

export const ChangeLoadmore = (page) =>{
	return (dispatch) =>{
		axios.get('/api/moreList.json?page=' + page).then((res) =>{
			const result = res.data.data;
			dispatch(addMoreList(result, page + 1))
		})
	}
}

export const getPageInputList = (articePage) => ({
	type: constant.change_page_type,
	articePage
})


export const toggleTopShow = (show) =>({
	type: constant.toggle_scroll_top,
	show
})