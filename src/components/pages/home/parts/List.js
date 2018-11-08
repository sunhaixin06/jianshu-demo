import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, Navicon, LoadMore} from '../style';
import { connect } from 'react-redux';
import { services } from '../store';

class list extends PureComponent{

	render(){
		const { List, Loadmore, page } = this.props;

		return(
			<div>
			{List? List.map((item, i) =>{
					return(
						<Link 
						key={i} 
						to={{
							pathname: `/detail`,
							search: `${item.get('id')}`
						}}>
						<ListItem>
							<img className="pic" src={item.get('imgUrl')} alt=""/>
							<ListInfo>
								<h3 className="title">{item.get('title')}</h3>
								<p className="desc">{item.get('desc')}</p>
								<div className="meta">
									<div className="nickname">
										{item.get('nickname')}
									</div>
									<div>
										<Navicon className="iconlistlike iconfont"/>
										<i>{item.get('comment')}</i>
									</div>
									<div>
										<Navicon className="iconlist_like iconfont"/>
										<i>{item.get('like')}</i>
									</div>
									{item.get('money') ?
										<div>
											<Navicon className="iconlist_money iconfont"/>
											<i>{item.get('money')}</i>
										</div>
										: ""}
								</div>
						    </ListInfo>
						</ListItem>
					</Link>)}) : ""}
			<LoadMore onClick={() => Loadmore(page)}>阅读更多</LoadMore>
			</div>
		)
	}
}


const mapState = (state) =>({
	page: state.getIn(['home', 'Page']),
	List: state.getIn(['home', 'articleList'])
})

const mapDispatch =(dispatch) =>({
	Loadmore(page){
		dispatch(services.ChangeLoadmore(page))
	}
})

export default connect(mapState, mapDispatch)(list);