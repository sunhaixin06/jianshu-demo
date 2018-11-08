import React, { Component} from 'react';
import { connect } from 'react-redux';
import './style.less';
import { Contract } from '../../constants'
import { services } from './store';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import Headers from '../common/header/Header';
import { 
    Navicon, 
    ColXSWrap, 
    ColXSAvatar, 
    ColXSName, 
    ColXSDescription, 
    ColXSBtn, 
    ColXSMeta
} from './styles';

const { Header, Footer, Content } = Layout;

class Medium extends Component{
    
    componentDidMount(){
		this.props.changeMata();
    }
    
    render(){
        const List = this.props.MList.toJS();
        return(
            <div>
                <Headers/>
                <Layout className="MediumLayout">
                    <Header className="MediumHeadrs">
                        <img src={Contract} alt="" />
                        <Link to="##" className="help">
                            <Navicon className="iconNavHelp iconfont" />
                            如何成為簽約作者
                        </Link>
                    </Header>
                    <Content className="MediumCont">
                        {List? List.map((M, i) =>{
                            return(
                            <div className="col_xs" key={i}>
                                <ColXSWrap>
                                    <a>
                                        <ColXSAvatar src={M.avatar} alt="" />
                                        <ColXSName>{M.nickname}</ColXSName>
                                        <ColXSDescription>{M.title}</ColXSDescription>
                                    </a>
                                    <ColXSBtn className="btn_success">
                                    <Navicon className="iconFollow iconfont" />
                                    <span className="guanzhu">關注</span>
                                    </ColXSBtn>
                                    <hr/>
                                    <ColXSMeta>最近更新</ColXSMeta>
                                    <div className="recent_update">
                                        <p>{M.desc}</p>
                                    </div>
                                </ColXSWrap>
                            </div>
                            )
                        }): ""}
                    </Content>
                    <Footer className="MediumFoot">加载更多</Footer>
                </Layout>
            </div>
        )
    }
}

const mapState = (state) =>({
	MList: state.getIn(['medium', 'mediumList'])
})

const mapDispatch =(dispatch) =>({
    changeMata(){
		dispatch(services.getMediumList());
	},
})

export default connect(mapState, mapDispatch)(Medium);