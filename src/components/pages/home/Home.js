import React, { PureComponent }from 'react';
import { connect } from 'react-redux';
import Topic from './parts/Topic';
import List from './parts/List';
import Hot from './parts/Hot';
import Banners from './parts/banners';
import Recommend from './parts/Recommend';
import Header from '../../common/header/Header';
import { services } from './store';
import { HomeWrapper, HomeLeft, HomeRight, BackTop, Navicon} from './style';
class Home extends PureComponent{

	render(){
		const { showScroll, handleScrollTop} = this.props;
		return (
			<div>
				<Header />
				<HomeWrapper>
					<HomeLeft>
					   <Banners/><Topic/><List/>
					</HomeLeft>
					<HomeRight>
						<Hot/><Recommend/>
					</HomeRight>
					{ showScroll ? 
						<BackTop onClick={handleScrollTop}>
							<Navicon className="iconbacktop iconfont" />
					    </BackTop> : null}
				</HomeWrapper>
			</div>
		)
	}

	componentDidMount(){
		this.bindEvents();
		this.props.HomeData();
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.ScrollTopShow);
	}

	bindEvents(){
		window.addEventListener('scroll', this.props.ScrollTopShow);
	}


}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
	HomeData(){
		dispatch(services.getHomeInfo());
	},
	ScrollTopShow(){
		if(document.documentElement.scrollTop > 100){
			dispatch(services.toggleTopShow(true))
		}else{
			dispatch(services.toggleTopShow(false))
		}
	},
	handleScrollTop(){
		dispatch(services.setTop);
	}
});

export default connect(mapState,mapDispatch)(Home);