import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, Navicon, LoadMore} from '../style';
import { connect } from 'react-redux';
import { services } from '../store';

class list extends PureComponent{

	render(){
		const { articleList, Loadmore, page} = this.props;

		return(
			<div>
			{articleList? 
			 articleList.map((item, i) =>{
					return(
						<Link 
						key={i} 
						to={{
						pathname: `/detail?${item.get('id')}`,
						state: { 
							title: item.get('title'), 
							nickname: item.get('nickname'),
							comment: item.get('comment'),
							like: item.get('like'),
							money: item.get('money'),
							avatar: item.get('avatar')}
						}}>
							<ListItem>
								<img 
								className="pic" 
								src={item.get('imgUrl')} 
								alt=""/>
								<ListInfo>
									<h3 className="title">{item.get('title')}</h3>
									<p className="desc">{item.get('desc')}</p>
									<div className="meta">
										<div className="nickname">{item.get('nickname')}</div>
										<div>
											<Navicon className="iconlistlike"/>
											<i>{item.get('comment')}</i>
										</div>
										<div>
											<Navicon className="iconlist_like"/>
											<i>{item.get('like')}</i>
										</div>
										{
											item.get('money') ?
											<div>
												<Navicon className="iconlist_money"/>
												<i>{item.get('money')}</i>
											</div>
											: ""
										}
									</div>
							    </ListInfo>
							</ListItem>
					</Link>

					)
				}) : ""
			}
			<LoadMore onClick={() => Loadmore(page)}>阅读更多</LoadMore>
			</div>
		)
	}
}


const mapState = (state) =>({
	articleList: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'Page']),
})

const mapDispatch =(dispatch) =>({
	Loadmore(page){
		dispatch(services.ChangeLoadmore(page))
	}
})


export default connect(mapState, mapDispatch)(list);


//