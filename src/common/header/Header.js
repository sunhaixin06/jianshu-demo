import React, { Component} from 'react';
import { connect } from 'react-redux';
import { services } from './store';
import { actionLogin } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { 
	HeaderNav,
	HeaderWrapper, 
	Logo, Nav, NavItem, 
	Navicon, NavSearch, 
	Addition, Button ,
	SearchWapper, SearchInfo,
	SearchInfoTitle,
	SearchSwitch,
	SerachItem,
	Trending,

} from './style';

class Header extends Component{
	SerachListPage(){
		const { focused, mouseIn, list, total, page, EnterInput, LeaveInput, PageInput} = this.props;
		let newlist = list.toJS();
		let totallist = [];

    	if(newlist.length){
    		for (var i = (page -1) * 10; i < page * 10; i++) {
	    		totallist.push(
	    			<SerachItem key={newlist[i]}>{newlist[i]}</SerachItem>
	    		)
	    	}
    	}

    	if(focused || mouseIn){
    		return (
	    		<SearchInfo 
		    		onMouseEnter={EnterInput}
		    		onMouseLeave={LeaveInput}
		    		className="Navtips" 
		    		>
	    			<SearchInfoTitle>
	    				<Trending className="trending">
	        				热门搜索
	        				<SearchSwitch 
	        					onClick={() => PageInput(page, total, this.spinIcon)}
	        				>
	        					<i 
	        					ref={(icon) => { this.spinIcon = icon }}
	        					className='iconChange spin'/>
	        					换一批
	        				</SearchSwitch>
	    				</Trending>
	    				{totallist}
	    			</SearchInfoTitle>
	    			
	    		</SearchInfo>
	    	)
    	}else{
    		return null;
    	}
    }
    render(){
    	const { focused, FocusInput, BlurInput, list, setin, Sign_Up, Sign_In, Sign_out} = this.props;
        return(
        	<HeaderNav>
	             <HeaderWrapper>   
	             	<Link to="/">
	                	<Logo/>
	                </Link>
	                <Nav>
	                	<NavItem className='left active'>
	                		<Navicon className='iconindex'/>首页
	                	</NavItem>
	                	<NavItem className='left download'>
	                		<Navicon className='icondow'/>下载App
	                	</NavItem>
	                	{setin?
		                	<NavItem 
		                		className='right login'
		                		onClick={Sign_out}
		                	>退出</NavItem>:
		                	<Link to="/login">
			                	<NavItem 
			                		className='right login'
			                		onClick={Sign_In}
			                	>登录</NavItem>
		                	</Link>
	                	}
	                	<NavItem className='right'>
	                		<Navicon className='iconAa'/>
	                	</NavItem>
	                	<SearchWapper>
	                		<CSSTransition
	                		  in={focused}
	                		  timeout={300}
	                		  classNames="slide"
	                		>
			                	<NavSearch 
			                	className={focused ? 'focused': ''}
			                	onFocus={ () =>  FocusInput(list)}
			                	onBlur={BlurInput}
			                	/>
			                </CSSTransition>
			                	<Navicon 
			                	className={focused ? 'focused iconsearch': 'iconsearch'} />
		                		{this.SerachListPage()}
		                </SearchWapper>
	                </Nav>
	                <Addition>
	                	<Button className='article'><Navicon className='iconWrite'/>写文章</Button>
	                	<Link to="/login">
		                	<Button 
		                		className='register'
		                		onClick={Sign_Up}
		                	>注册</Button>
	                	</Link>
	                </Addition>
	            </HeaderWrapper>
	        </HeaderNav>
        )
           
    }

}

const mapStateToProps = (state) =>{
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		total: state.getIn(['header','total']),
		mouseIn: state.getIn(['header','mouseIn']),
		setin: state.getIn(['header','login']),
		tabskey: state.getIn(['login', 'tabskey']),
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		FocusInput(list){
			(list.size === 0) && dispatch(services.getFocusInputList());
			dispatch(services.getFocusInputAction());
	    },
	    Sign_In(){
	    	dispatch(actionLogin.getLoginin());
	    },
	    Sign_Up(){
	    	dispatch(actionLogin.getLoginup());
	    },
	    Sign_out(){
	    	dispatch(services.getHeaderLogup());
	    },
	    BlurInput(){
			dispatch(services.getBlurInputAction());
	    },

	    EnterInput(){
	    	dispatch(services.getEnterInputLIst());
	    },

	    LeaveInput(){
	    	dispatch(services.getLeaveInputLIst());
	    },
	    PageInput(page, total, spin){
	    	let originPage = spin.style.transform.replace(/[^0-9]/ig, '');
	    	if(originPage){
	    		originPage = parseInt(originPage, 10);
	    	}else{
	    		originPage = 0;
	    	}
	    	spin.style.transform = 'rotate(' +(originPage + 360) + 'deg)';

			if(page < total){
				dispatch(services.getPageInputList(page + 1));
			}else{
				dispatch(services.getPageInputList(1));
			}
	    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

