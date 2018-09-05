import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWarpper, RecommendItem, Navicon, RecommendAuthors} from '../style';
import { services } from '../store';
class recommend extends PureComponent{

	AuthorsListPage(){
		const { PageInput, articePage, followlist , articetotal} = this.props;
		let authorslist = [];
		let newlist = followlist.toJS();
		if(newlist.length){
    		for (var i = (articePage -1) * 5; i < articePage * 5; i++) {
	    		authorslist.push(
	    			<li key={newlist[i].id}>
						<img src={newlist[i].imgUrl} alt="" />
						<div className="name">
							<span>{newlist[i].title}</span>
							<p>{newlist[i].comment}</p>
						</div>
						<div className="follow"><Navicon className="iconfollow iconfont"/>关注</div>
					</li>
	    		)
	    	}
    	}

    	return (
    		<RecommendAuthors>
				<div className="title">
					<span>推荐作者</span>
					<a onClick={() => PageInput(articePage, articetotal, this.spinIcon)}>
					<i ref={(icon) => { this.spinIcon = icon }}
					className="iconChangeAAA spin iconfont" />换一批</a>
				</div>
				<ul className="list">
					{authorslist}
				</ul>
			</RecommendAuthors>
   		 )
	}

	render(){
		return(
			<div>
				<RecommendWarpper>
					<img alt=""
					src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
					className="desc"/>
					<RecommendItem>
						<div className="title">下载简书手机App
							<Navicon className="iconlinks iconfont" />
						</div>
						<div className="description">随时随地发现和创作内容</div>
					</RecommendItem>
				</RecommendWarpper>
				{this.AuthorsListPage()}
			</div>
		)
	}
	
	componentDidMount(){
		this.props.changeHomeData();
	}
}

const mapStateToProps = (state) =>{
	return{
		followlist: state.getIn(['home','followlist']),
		articePage: state.getIn(['home','articePage']),
		articetotal: state.getIn(['home','articetotal']),
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		changeHomeData(){
			dispatch(services.getMoreList());
		},

		PageInput(articePage, articetotal, spin){
	    	let originPage = spin.style.transform.replace(/[^0-9]/ig, '');
	    	if(originPage){
	    		originPage = parseInt(originPage, 10);
	    	}else{
	    		originPage = 0;
	    	}
	    	spin.style.transform = 'rotate(' +(originPage + 360) + 'deg)';

			if(articePage < articetotal){
				dispatch(services.getPageInputList(articePage + 1));
			}else{
				dispatch(services.getPageInputList(1));
			}
	    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(recommend);