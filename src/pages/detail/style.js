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
`;