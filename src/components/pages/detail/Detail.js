import React, { PureComponent }from 'react';
import { services } from './store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../common/header/Header';
import { 
	DetailWrapper, 
	DetailAuthor, 
	DetailTitle, 
	DetailAvatar, 
	DetailInfo, 
	DetailContent, 
	DetailFreeReward, 
	DetailFoot, 
	DetailFootdetail, 
	MetaBottom,
	CommentList
} from './style';

class Detail extends PureComponent{
	
	
	render(){
		const { List, location, Commonent, CloseComment, BlockComment} = this.props;
		let todolist = [];
		if(List){
			let dlist = List.toJS();
			for (var i = dlist.length - 1; i >= 0; i--) {
				if(dlist[i].id == location.search.split('?')[1]){
					todolist.push({
						avatar: dlist[i].avatar,
						comment: dlist[i].comment,
						desc: dlist[i].desc,
						imgUrl: dlist[i].imgUrl,
						like: dlist[i].like,
						nickname: dlist[i].nickname,
						title: dlist[i].title
					})
				}
			}
		}

		return (
			<div>
				<Header />
				{todolist?todolist.map((item, i) =>{
				 return(
					<div key={i}>
						<DetailWrapper>
							<DetailTitle>{item.title}</DetailTitle>
							<DetailAuthor>
								<DetailAvatar>
									<img 
									className="avatar" 
									alt=""
									src={item.avatar}  />
								</DetailAvatar>
								<DetailInfo>
									<span className="name">{item.nickname}</span>
									<div className="success">
										<i className="ic-follow iconfont" />
										<span>关注</span>
									</div>
									<div className="meta">
										<span className="publish-time">2018.07.26 13:29*</span>
										<span className="wordage">字数 61</span>
										<span className="views-count">阅读 64</span>
										<span className="comments-count">评论 {item.comment}</span>
										<span className="likes-count">喜欢 {item.like}</span>
										{ item.money ? <span className="money-count">打赏 {item.money}</span>: ""}
									</div>
								</DetailInfo>
							</DetailAuthor>
							<DetailContent>
								<div dangerouslySetInnerHTML={{__html: Commonent}}></div>
							</DetailContent>
							<DetailFreeReward>
								<p>小礼物走一走，来简书关注我</p>
								<div className="moneys btn">赞赏支持</div>
							</DetailFreeReward>
							<DetailFoot>
								<a className="notebook" href="/nb/17585483">
									<i className="iconfont ic-search-notebook"></i>
									<span>Front end learn road</span>
								</a>
								<div 
								className="copyright" 
								data-toggle="tooltip" 
								data-html="true" 
								data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
									© 著作权归作者所有
								</div>
							</DetailFoot>
							<DetailFootdetail>
								<div className="info">
									<a className="avatar">
										<img src={item.avatar} alt="" />
									</a>
									<a className="title">{item.nickname}</a>
									<p>写了 64463 字，被 84 人关注，获得了 {item.like} 个喜欢</p>
								</div>
								<div className="signature">
								一个喜欢把自己学习中遇到的问题把它以文章的形式表现出来。
								</div>
							</DetailFootdetail>
							<MetaBottom>
								<div className="like">
									<div className="btn like-group active">
										<i className="iconfont likepelper" />
										<div className="btn-like">喜欢</div> 
										<div className="modal-wrap">{item.like}</div>
									</div> 
								</div>
								<div className="share-group">
									<div className="share-circle">
										<i className="ic-wechat iconfont" />
									</div>
									<div className="share-circle">
										<i className="ic-weibo iconfont" />
									</div>
									<div className="share-circle">
										<i className="ic-picture iconfont" />
									</div>
									<div className="share-circle more-share">
										更多分享
									</div>
								</div> 
							</MetaBottom>
							<CommentList>
								<div 
								className="opennone" 
								ref={(opennone) => { this.openNone = opennone }} >
									<form className="new-comment" >
										<div className="avatar">
											<img src={item.avatar} alt="" />
										</div>
										<textarea placeholder="写下你的评论..."></textarea>
									</form>
									<div className="normal-comment-list">
										<div className="top-title">
											<span>评论</span> 
											<a 
											onClick={() =>CloseComment(this.openNone, this.openBlock )}
											className="close-btn">关闭评论</a>
										</div>
									</div>
									<div className="no-comment"></div>
									<div className="text">
										智慧如你，不想<a>发表一点想法</a>咩~
										</div>
								</div>
								<div 
								ref={(openblock) => { this.openBlock = openblock }}
								className="normal-comment-list openblock ">
									<div className="open-block">
										<a 
										onClick={() =>BlockComment(this.openBlock, this.openNone)}
										className="open-btn">打开评论</a>
									</div>
								</div>
							</CommentList>
						</DetailWrapper>
					</div>)}) : ""}
			</div>
		)
	}

	componentDidMount(){
		this.props.getDetail();
		window.scrollTo(0, 0);
	}
}

const mapState = (state) =>({
	List: state.getIn(['detail', 'detaillist']),
	Commonent: state.getIn(['detail', 'commonent']),
})

const mapDispatch =(dispatch) =>({
	getDetail(){
		dispatch(services.getDetail());
	},
	BlockComment(openblock, opennone){
		opennone.style.display = 'block';
		openblock.style.display = 'none';
	},
	CloseComment(opennone, openblock){
		opennone.style.display = 'none';
		openblock.style.display = 'block';

	}
})

export default connect(mapState, mapDispatch)(withRouter(Detail));