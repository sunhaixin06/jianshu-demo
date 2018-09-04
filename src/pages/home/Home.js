import React, { PureComponent }from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Hot from './components/Hot';
import Banners from './components/banners';
import Recommend from './components/Recommend';
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
							<Navicon className="iconbacktop" />
					    </BackTop> : null}
				</HomeWrapper>
			</div>
		)
	}

	componentDidMount(){
		this.bindEvents();
		this.props.changeHomeData();
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents(){
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}


}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
	changeHomeData(){
		dispatch(services.getHomeInfo());
	},
	changeScrollTopShow(){
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