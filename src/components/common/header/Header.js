import React, { Component} from 'react';
import { connect } from 'react-redux';
import { services } from './store';
import { actionLogin } from '../../pages/login/store';
import { Touxiang } from '../../../constants';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { 
	HeaderNav,
	HeaderUser,
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
	        					className='iconChange spin iconfont'/>
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
    componentDidMount(){
		this.props.newotherlist();
	}
    render(){
    	const { 
			focused, FocusInput, BlurInput, 
			OthersOver, OthersOut, list, 
			otherlist, LookOut, LookOver,  
			otherClick, avatarList, 
			setin, Sign_Up, Sign_In } = this.props;
        return(
        	<HeaderNav>
	             <HeaderWrapper>   
	             	<Link to="/">
	                	<Logo/>
	                </Link>
		           {setin?
	               	<div>
		                <Nav>
		                	<NavItem className='left active'>
		                		<Navicon className='iconindex iconfont'/>发现
		                	</NavItem>
		                	<NavItem className='left download'>
		                		<Navicon className='iconmenu iconfont'/>关注
		                	</NavItem>
							<NavItem 
							className='left download' 
		                	onMouseOut={() => OthersOut(this.openIcon)} 
		                	onMouseOver={() => OthersOver(this.openIcon)}
		                	>
		                		<Navicon className='iconnot iconfont'/>消息
			                		<ul 
			                		ref={(open) => { this.openIcon = open }}
			                		className="dropdown-menu open">
			                			{otherlist.toJS()? otherlist.toJS().map((item) =>{
			                				return(
			                					<li key={item.id}>
			                						<a>
				                						<div 
				                						dangerouslySetInnerHTML={{__html: item.icon}}></div>
				                						<div className="title">{item.title}</div>
				                					</a>
			                					</li>
			                				)
			                			}):""}
			                		</ul>
		                	</NavItem>
		                	<NavItem className='right'>
		                		<Navicon className='iconAa iconfont'/>
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
				                	className={focused ? 'focused iconsearch iconfont': 'iconsearch iconfont'} />
			                		{this.SerachListPage()}
			                </SearchWapper>
		                </Nav>
		                <Addition>
		               		<HeaderUser
		               		onMouseOut={() => LookOut(this.lookIcon)} 
		                	onMouseOver={() => LookOver(this.lookIcon)}
		               		>
		               			<div className="avatar">
		               				<img src={Touxiang} alt=""/>
			               			<ul 
			               			ref={(look) => { this.lookIcon = look }}
			               			className="look"
			               			>
			               				{avatarList.toJS()? avatarList.toJS().map((item) =>{
			               					return(
			               						<li key={item.id} onClick={() =>otherClick(item.id)}>
					               					<span>
					               						<div 
					               						dangerouslySetInnerHTML={{__html: item.icon}}></div>
				                						<div className="title">{item.title}</div>
					               					</span>
					               				</li>	
			               					)
			               				}):""}
			               				
			               			</ul>
			               		</div>
		               		</HeaderUser>
		                	<Button className='article'><Navicon className='iconWrite iconfont'/>写文章</Button>
		                </Addition>
		           </div>:
	                <div>
		                <Nav>
		                	<NavItem className='left active'>
		                		<Navicon className='iconindex iconfont'/>首页
		                	</NavItem>
		                	<NavItem className='left download'>
		                		<Navicon className='icondow iconfont'/>下载App
		                	</NavItem>
		                	<Link to="/login">
			                	<NavItem 
			                		className='right login'
			                		onClick={Sign_In}
			                	>登录</NavItem>
		                	</Link>
		                	<NavItem className='right'>
		                		<Navicon className='iconAa iconfont'/>
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
				                	className={focused ? 'focused iconsearch iconfont': 'iconsearch iconfont'} />
			                		{this.SerachListPage()}
			                </SearchWapper>
		                </Nav>
		                <Addition>
		                	<Button className='article'><Navicon className='iconWrite iconfont'/>写文章</Button>
		                	<Link to="/login">
			                	<Button 
			                		className='register'
			                		onClick={Sign_Up}
			                	>注册</Button>
		                	</Link>
		                </Addition>
		            </div>
	                }
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
		otherlist: state.getIn(['header', 'otherList']),
		avatarList: state.getIn(['header', 'avatarList']),
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
	    BlurInput(){
			dispatch(services.getBlurInputAction());
	    },

	    EnterInput(){
	    	dispatch(services.getEnterInputLIst());
	    },

	    LeaveInput(){
	    	dispatch(services.getLeaveInputLIst());
	    },
	    newotherlist(){
	    	dispatch(services.getHeaderOthersList());
	    },
	    otherClick(key){
	    	if(key == 15){
	    		dispatch(services.getHeaderLogup());
	    	}
	    },	

	    OthersOver(open){
	    	open.style.display = 'block';
	    },
	    OthersOut(open){
	    	open.style.display = 'none';
	    },
	    LookOver(look){
	    	look.style.display = 'block';
	    },
	    LookOut(look){
	    	look.style.display = 'none';
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

