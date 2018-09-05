import styled from 'styled-components';

export const LoginWrapper = styled.div`
   text-align: center;
   height: 100%;
   background-color: #f1f1f1; 
`;

export const LoginLogo = styled.div`
	position: absolute;
    top: 56px;
    margin-left: 50px;
    .logo img{
		width: 100px;
		cursor: pointer;
    }
`;

export const LoginMain = styled.div`
	width: 400px;
    margin: 120px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    .ant-tabs-bar{
    	border-bottom: 1px solid #fff;
    }
    .ant-tabs-tab{
    	font-weight: 500;
    	font-size: 18px;
    	color: #969696;
    }
    .ant-tabs-nav .ant-tabs-tab-active{
    	font-weight: 500;
    	font-size: 18px;
    }
    .ant-input-affix-wrapper .ant-input:not(:first-child){
    	padding: 4px 12px 4px 35px;
    	background-color: hsla(0,0%,71%,.1);
    }
    .js-sign-in-container{
    	width: 300px;
    	border-radius: 4px 4px 0 0;
        margin: 40px auto 0;
    }
    .session{
    	height: 50px;
    }
    .ant-form-item{
    	margin-bottom: 0px;
    }
    .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled){
    	border-color: #d9d9d9;
    }
    .session .ant-input:focus{
    	border-color: #d9d9d9;
    	box-shadow: none;
    }
    .session .ant-input:hover{
    	border-color: #d9d9d9;
    	box-shadow: none;
    }
    .ant-form-explain, .ant-form-extra{
    	position: absolute;
	    right: 6px;
	    top: 16px;
    }
    .js-sign-in-button{
    	width: 100%;
    	border-radius: 25px;
    	margin-top: 20px;
    }
    
    .user, .lock, .weibo, .wechat, .qq, .qita, .phone{
        display: inline-block;
        line-height: 1.3;
        transition: .5s ease;
        font-size: 18px;
        color: #969696;
        margin-right: 5px;
        float: left;
    }
    .user:before{content:"\\E65E"}
    .lock:before{content:"\\E614"}
    .phone:before{content:"\\E65D"}
    .more-sign{
    	margin-top: 50px;
    	height: 73px;
    }
    .more-sign h6 {
	    position: relative;
	    margin: 0 0 10px;
	    font-size: 12px;
	    color: #b5b5b5;
	}
	.more-sign h6:after, .more-sign h6:before{
		content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 60px;
	    top: 5px;
	}
	.more-sign h6:before{
		left: 30px;
	}
	.more-sign h6:after{
		right: 30px;
	}
	.more-sign ul {
	    margin-bottom: 10px;
	    list-style: none;
	}
	.more-sign ul li {
	    margin: 0 8px;
	    display: inline-block;
	    width: 50px;
	    height: 50px;
	    line-height: 50px;
	}
	.more-sign ul li .weibo, .more-sign ul li .wechat, .more-sign ul li .qq, .more-sign ul li .qita{
		font-size: 28px;
		position: relative;
    	left: 10px;
    	cursor: pointer;
	}
	.more-sign ul li .weibo{
		color: #e05244;
	}
	.more-sign ul li .wechat{
		color: #00bb29;
	}
	.more-sign ul li .qq{
		color: #498ad5;
	}
	.sign-up-msg{
		margin: 10px 0;
	    padding: 0;
	    text-align: center;
	    font-size: 12px;
	    line-height: 20px;
	    color: #969696;
	}
	.sign-up-msg a{
		color: #3194d0;
	}
	.more-sign ul li .weibo:before{content:"\\E605"}
	.more-sign ul li .wechat:before{content:"\\E604"}
	.more-sign ul li .qq:before{content:"\\E603"}
	.more-sign ul li .qita:before{content:"\\E620"}
`;