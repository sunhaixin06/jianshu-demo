import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    margin: 0 auto;
    height: 800px;
    position: relative;
    top: 59px;
    padding-top: 30px;
`;

export const DetailTitle = styled.h1`
	font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
`;
export const DetailAuthor = styled.div`
	margin: 30px 0 40px;
`;

export const DetailAvatar = styled.div`
	width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
    .avatar{
		width: 100%;
	    height: 100%;
	    border: 1px solid #ddd;
	    border-radius: 50%;
    }

`;

export const DetailInfo = styled.div`
	vertical-align: middle;
    display: inline-block;
    margin-left: 15px;
    .name{
    	margin-right: 3px;
	    font-size: 16px;
	    vertical-align: middle;
	    cursor: pointer;
    }
    .success{
    	padding: 0 7px 0 5px;
    	cursor: pointer;
    	font-size: 12px;
    	border-radius: 40px;
	    color: #fff;
	    background-color: #42c02e;
	    border-color: #42c02e;
	    display: inline-block;
	    border: 1px solid transparent;
    	white-space: nowrap;

    }
    .success .ic-follow{
        display: inline-block;
        line-height: normal;
        font-size: 12px;
    }
    .success .ic-follow:before{content:"\\E611"}
    .success span{
    	margin-left: 2px;
    	display: inline;
    }
    .meta{
    	margin-top: 14px;
	    font-size: 12px;
	    color: #969696;
    }
    .meta .publish-time{
    	padding-right: 5px;
    }
    .meta .wordage{
    	padding-right: 5px;
    }
    .meta .views-count{
    	padding-right: 5px;
    }
    .meta .comments-count{
    	padding-right: 5px;
    }
    .meta .likes-count{
    	padding-right: 5px;
    }
    .meta .money-count{
        padding-right: 5px;
    }
`;

export const DetailContent = styled.div`
	color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 20px;
`;

export const DetailFreeReward = styled.div`
    min-height: 144px;
    padding: 20px 0;
    text-align: center;
    clear: both;
    p{
        padding: 0 30px;
        margin-bottom: 20px;
        min-height: 24px;
        font-size: 17px;
        font-weight: 700;
        color: #969696;
    }
    .moneys{
        margin-bottom: 20px;
        padding: 8px 25px;
        font-size: 16px;
        color: #fff;
        background-color: #ea6f5a;
        border-radius: 20px;
        cursor: pointer;
    }
    .btn{
        display: inline-block;
    }
`;

export const DetailFoot = styled.div`
    margin-bottom: 30px;
    .notebook{
        font-size: 12px;
        color: #c8c8c8;
    }
    .notebook i {
        margin-right: 2px;
        font-size: 15px;
    }
    .ic-search-notebook:before {content: "\\E643";}
    .copyright{
        float: right;
        margin-top: 5px;
        font-size: 12px;
        line-height: 1.7;
        color: #c8c8c8;
    }
`;

export const DetailFootdetail = styled.div`
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
    .info{
        min-height: 47px;
    }
    .avatar{
        float: left;
        margin-right: 10px;
        width: 48px;
        height: 48px;
    }
    .avatar img{
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }

    .title{
        margin-right: 3px;
        font-size: 17px;
        color: black;
        line-height: 1.8;
        vertical-align: middle;
    }
    p{
        margin-bottom: 0;
        color: #969696;
    }
    .signature{
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e1e1e1;
        color: #969696;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const MetaBottom = styled.div`
    margin-top: 40px;
    margin-bottom: 80px;
    .like{
        display: inline-block;
        cursor:pointer;
    }
    .active{
        background-color: #EA6F5A;
    }
    .btn{
        display: inline-block;
    }
    .like .like-group{
        position: relative;
        width: 165.02px;
        height: 57px;
        border: 1px solid #EA6F5A;
        border-radius: 40px;
    }
    .likepelper{
        position: absolute;
        color: #fff;
        left: 27px;
        font-size: 19px;
        top: 12px;
    }
    .likepelper:before{content: "\\E661";}
    .btn-like{
        display: inline-block;
        font-size: 19px;
        color: white;
        position: relative;
        left: 55px;
        top: 12px;
    }
    .modal-wrap{
        border-left: 1px solid #fff;
        display: inline-block;
        float: right;
        width: 54px;
        height: 25px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        position: relative;
        top: 15px;
        line-height: 24px;
    }
    .share-group{
        float: right;
        margin-top: 6px;
    }
    .share-circle{
        width: 50px;
        height: 50px;
        margin-left: 5px;
        text-align: center;
        border: 1px solid #dcdcdc;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }
    .more-share{
        width: auto;
        padding: 4px 18px;
        font-size: 14px;
        color: #9b9b9b;
        line-height: 40px;
        border-radius: 50px;
    }
    .share-circle:hover, .more-share:hover{
        background-color:#F4F4F4;
        transition: all .2s ease-in;
    }
    .ic-picture:before{content: "\\E6B2";}
    .ic-weibo:before{content: "\\E605";}
    .ic-wechat:before{content: "\\E604";}
    .ic-picture, .ic-weibo, .ic-wechat{
        font-size: 24px;
        line-height: 2;
    }
    .ic-weibo{
        color: #e05244;
    }
    .ic-wechat{
        color: #00bb29;
    }
    .ic-picture{
        color: #9b9b9b;
    }
`;

export const CommentList = styled.div`
    padding-top: 20px;
    .new-comment{
        position: relative;
        margin-left: 48px;
    }
    form {
        margin: 0 0 20px;
    }
    .avatar{
        position: absolute;
        left: -48px;
        cursor: pointer;
    }
    .avatar img{
        width:38px;
        height:38px;
        border: 1px solid #ddd;
        border-radius: 50%;
        margin-right: 5px;
    }
    textarea{
        padding: 10px 15px;
        width: 100%;
        height: 80px;
        font-size: 13px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
        resize: none;
        display: inline-block;
        vertical-align: top;
        outline-style: none;
    }
    .normal-comment-list{
        margin-top: 30px;
    }
    .top-title {
        padding-bottom: 20px;
        font-size: 17px;
        font-weight: 700;
        border-bottom: 1px solid #f0f0f0;
    }
    .top-title span {
        vertical-align: middle;
    }
    .top-title .close-btn {
        margin-left: 10px;
        font-size: 12px;
        color: #969696;
    }
    .no-comment{
        width: 226px;
        height: 92px;
        margin: 30px auto 20px;
        background: url(//cdn2.jianshu.io/assets/web/icon_comment_no-1b12627d360515e52c3c4dfc2f6b0eb7.png) no-repeat;
        background-size: contain;
    }
    .text{
        margin-bottom: 50px;
        text-align: center;
        font-size: 12px;
        color: #969696;
    }
    .text a{
        color: #3194d0;
    }
    .open-block{
        padding: 30px 0 50px;
        text-align: center;
        border-top: 1px solid #f0f0f0;
    }
    .open-btn {
        padding: 10px 20px;
        font-size: 16px;
        color: #969696;
        border: 1px solid #dcdcdc;
        border-radius: 20px;
    }
    .openblock{
        display: none;
    }
`;