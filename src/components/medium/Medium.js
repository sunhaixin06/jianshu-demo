import React, { Component} from 'react';
import { connect } from 'react-redux';
import './style.less';
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
		this.props.changeMediumData();
    }
    
    render(){
        const { MediumList } = this.props;

        return(
            <div>
                <Headers/>
                <Layout className="MediumLayout">
                    <Header className="MediumHeadrs">
                        <img src="https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" alt="" />
                        <Link to="##" className="help">
                            <Navicon className="iconNavHelp iconfont" />
                            如何成為簽約作者
                        </Link>
                    </Header>
                    <Content className="MediumCont">
                        {MediumList? MediumList.map((mediums, i) =>{
                            return(
                            <div className="col_xs" key={i}>
                                <ColXSWrap>
                                    <a>
                                        <ColXSAvatar src={mediums.get("avatar")} alt="" />
                                        <ColXSName>{mediums.get("nickname")}</ColXSName>
                                        <ColXSDescription>{mediums.get("title")}</ColXSDescription>
                                    </a>
                                    <ColXSBtn className="btn_success">
                                    <Navicon className="iconFollow iconfont" />
                                    <span className="guanzhu">關注</span>
                                    </ColXSBtn>
                                    <hr/>
                                    <ColXSMeta>最近更新</ColXSMeta>
                                    <div className="recent_update">
                                        <p>{mediums.get("desc")}</p>
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
	MediumList: state.getIn(['medium', 'mediumList'])
})

const mapDispatch =(dispatch) =>({
    changeMediumData(){
		dispatch(services.getMediumList());
	},
})

export default connect(mapState, mapDispatch)(Medium);


/* <div className="col_xs">
    <ColXSWrap>
        <a>
            <ColXSAvatar src="//upload.jianshu.io/users/upload_avatars/4802366/4f86b75d-b61b-4126-8be4-87a151c9cd28.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="" />
            <ColXSName>汪波_偶遇科学</ColXSName>
            <ColXSDescription>偶遇科学，携手人文。喜欢探求事物背后...</ColXSDescription>
        </a>
        <ColXSBtn className="btn_success">
            <Navicon className="iconFollow iconfont" />
            <span>關注</span>
        </ColXSBtn>
        <hr/>
        <ColXSMeta>最近更新</ColXSMeta>
        <div className="recent_update">
            <p>真可惜，真幸运</p>
            <p>1.4 横着切牛肉：学科的联系</p>
            <p>1.3 地平线下的朝阳：现在存在吗？</p>
        </div>
    </ColXSWrap>
</div> */