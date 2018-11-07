import styled from 'styled-components';
import logoPic from '../../../statics/logo.png';


export const HeaderNav = styled.div`
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    position: fixed;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 1000;
`;
export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    display: block;
    height: 56px;
    background-image: url(${logoPic});
    background-repeat:no-repeat
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 56px;
    margin:0 auto;
    .dropdown-menu{
        position: absolute;
        width: 200px;
        top: 100%;
        left: 0px;
        padding: 5px 0;
        font-size: 14px;
        border-radius: 0 0 4px 4px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.15);
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
        background-clip: padding-box;
    }
    .open{
         display: none;
         transition: all .2s ease-in;
    }
    .dropdown-menu li a{
        display: block;
        height: auto;
        padding: 10px 20px;
        line-height: 30px;
    }
    .dropdown-menu li:hover{
        background-color: #F4F4F4;
        transition: all .2s ease-in;
    }
    .ICON {
        margin-right: 19px;
        font-size: 22px;
        color: #ea6f5a;
        vertical-align: middle;
        float: left;
    }
    .title{
        vertical-align: middle;
        color: #333;
    }

    .ic_comment:before{content:"\\E656"}
    .ic_cats:before{content:"\\E637"}
    .ic_requests:before{content:"\\E635"}
    .ic_likes:before{content:"\\E664"}
    .ic_follows:before{content:"\\E636"}
    .ic_money:before{content:"\\E606"}
    .ic_others:before{content:"\\E633"}
`;
export const HeaderUser = styled.div`
    width: 88px;
    height: 56px;
    float: left;
    text-align:center;
    :hover{
        background-color: #f5f5f5
        transition: all 0.1s ease-in;
    }
    img{
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .avatar{
        position: relative;
        width: 40px;
        height: 40px;
        margin: 8px 28px 8px 20px;
    }
    .avatar:before{
        content: "";
        position: absolute;
        top: 18px;
        right: -14px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #999;
    }
    ul{
        left: -20px;
        padding: 5px 0;
        width: 160px;
        height:420px;
        border-radius: 0 0 4px 4px;
        border-color: transparent;
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
        filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
        -webkit-filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
        position: absolute;
        top: 47px;
        background-color: #fff;
        cursor: pointer;
        background-clip: padding-box;
    }
    ul li span{
        display: block;
        height: auto;
        padding: 10px 20px;
        line-height: 30px;
    }
    ul li{
        line-height: 20px;
    }
    .look{
        display: none;
    }
    .title{
        text-align: justify;
        position: relative;
        left: 15px;
        color: #333;
    }
    .ICON {
        font-size: 19px;
        color: #ea6f5a;
        vertical-align: middle;
        float: left;
    }
    ul li:hover{
        background-color: #F4F4F4;
        transition: all .2s ease-in;
    }
    .ic-navigation-profile:before{content:"\\E650"}
    .ic-navigation-mark:before{content:"\\E64F"}
    .ic-navigation-like:before{content:"\\E654"}
    .ic-paid:before{content:"\\E6F0"}
    .ic-navigation-wallet:before{content:"\\E653"}
    .ic-navigation-settings:before{content:"\\E652"}
    .ic-navigation-feedback:before{content:"\\E655"}
    .ic-navigation-signout:before{content:"\\E61D"}
`;

export const Navicon = styled.i`
    margin-right: 5px;
    float: left;
    font-size: 20px;
    &.iconAa{
        font-size: 24px;
        color: #969696;
    }
    &.iconWrite{
        margin-right: 3px;
        font-size: 19px;
        vertical-align: middle;
        position: relative;
        left: 9px;
        top: 2px;
    }
    &.iconsearch{
        margin: 5px -1px 0 0;
        display: block;
        position: absolute;
        top: 8px;
        right: -8px;
        width: 30px;
        font-size: 17px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        color: #969696;
        text-align: center;
        &.focused{
            background: #777;
            color:#fff;
        }
    }
    &.iconmenu:before{content:"\\E69C"}
    &.iconnot:before{content:"\\E69B"}
    &.iconindex:before{content:"\\E69A"}
    &.icondow:before{content:"\\E69D"}
    &.iconAa:before{content:"\\E6B5"}
    &.iconWrite:before{content:"\\E60E"}
    &.iconsearch:before{content:"\\E618"}
    
`;

export const NavItem = styled.div`
    line-height: 26px;
    padding: 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
        margin-right: 10px;
        cursor: pointer;
    }
    &.right {
        float: right;
        color:#969696;
        cursor: pointer;
    }
    &.active{
        color: #ea6f5a; 
    }
    &.login{
        font-size: 15px;
        margin-top: 2px;
    }
    &.download{
        position: relative;
    }
    &.download:hover{
        background-color: #F4F4F4;
        transition: all 0.1s ease-in;
    }

`;
export const SearchWapper = styled.div`
    float: left;
    position: relative;
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 19px;
    top: 58px;
    width: 220px;
    padding: 0 17px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    z-index: 100;

    &.Navtips:before{
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: -1;
    }
    &.Navtips:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
`;
export const Trending = styled.div`
    height: 20px;
    margin-bottom: 10px;
`;
export const SearchInfoTitle = styled.div`
    padding: 20px 0px 10px;
    font-size: 14px;
    color: #969696;
    height: 127px;
`;

export const SearchSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor: pointer;
    .iconChange{
        display: inline-block;
        line-height: 1;
        transition: .5s ease;
        font-size: 13px;
        margin-right: 5px;
        float: left;
    }
   
    .spin{
        display: block;
        float: left;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
    .iconChange{
        margin-top: 3.3px;
    }
    .iconChange:before{content:"\\E6E6"}
`;

export const SerachItem = styled.a`
    line-height: 20px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 13px;
    padding: 0px 5px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    &.tagwap:hover{
        color: #333;
        border: 1px solid #787878;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    float: left;
    position: relative;
    top: 9px;
    left:15px;
    width: 200px;
    height: 38px;
    border: none;
    margin-top：9px;
    outline: none;
    border-radius: 19px;
    padding: 0 20px;
    box-size: border-box;
    background:#eee;
    font-size: 14px;
    color: black;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 280px; 
    }
    &.slide-enter {
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 280px;
    }
    &.slide-exit{
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 200px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    width: 210px;

`;

export const Button = styled.button`
    float:right;
    line-height: 24px;
    border-radius: 20px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    &.register{
        width: 80px;
        height: 38px;
        position: relative;
        top: 10px;
        border: 1px solid rgba(236,97,73,.7);
        font-size: 15px;
        color: #ea6f5a;
        float: left;
        background-color: transparent;
    }
    &.article{
        width: 100px;
        height: 40px;
        background-color: #ea6f5a;
        font-size: 15px;
        border: 0px solid transparent;
        color: #fff;
        float: right;
        position: relative;
        right: 15px;
        top: 8px;
    }
     &.article:hover{
        opacity: 0.95;
        transition: all 0.2s ease-in;
    }
    &.register:hover{
        background-color: #FCF6F5;
        transition: all 0.2s ease-in;
    }

`;