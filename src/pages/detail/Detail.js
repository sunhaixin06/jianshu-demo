import React, { PureComponent }from 'react';
import { services } from './store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../common/header/Header';
import { DetailWrapper, DetailAuthor, DetailTitle, DetailAvatar, DetailInfo, DetailContent  } from './style';

class Detail extends PureComponent{
		// const { title, nickname, money, like, comment, avatar } = location.state;
	render(){
		const { List, location } = this.props;
		let id = location.search.split('?')[1];
		return (
			<div>
				{List?
					List.map((item, i) =>{
						return(
							<div>
								{id == item.get('id') ? 
								<div key={item.get('id')}>
									<Header />
									<DetailWrapper>
										<DetailTitle>{item.get('title')}</DetailTitle>
										<DetailAuthor>
											<DetailAvatar>
												<img 
												className="avatar" 
												alt=""
												src={item.get('avatar')}  />
											</DetailAvatar>
											<DetailInfo>
												<span className="name">{item.get('nickname')}</span>
												<div className="success">
													<i className="ic-follow iconfont" />
													<span>关注</span>
												</div>
												<div className="meta">
													<span className="publish-time">2018.07.26 13:29*</span>
													<span className="wordage">字数 61</span>
													<span className="views-count">阅读 64</span>
													<span className="comments-count">评论 {item.get('comment')}</span>
													<span className="likes-count">喜欢 {item.get('like')}</span>
													{ item.get('money') ? <span className="money-count">打赏 {item.get('money')}</span>: ""}
												</div>
											</DetailInfo>
										</DetailAuthor>
										<DetailContent>

										</DetailContent>
									</DetailWrapper>
								</div>
								:""}
							 </div>
						)	
					}) : ""
				}
				
			</div>
		)
	}

	componentDidMount(){
		this.props.getDetail();
	}
}

const mapState = (state) =>({
	List: state.getIn(['detail', 'detaillist'])
})

const mapDispatch =(dispatch) =>({
	getDetail(){
		dispatch(services.getDetail());
	},
})

export default connect(mapState, mapDispatch)(withRouter(Detail));