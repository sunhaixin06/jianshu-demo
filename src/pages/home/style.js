import styled from 'styled-components';

export const HomeWrapper = styled.div`
   width: 960px;
   margin: 0 auto;
   position: relative;
   top: 60px;
   
`;

export const HomeLeft = styled.div`
	padding-top: 30px;
    margin-left: 15px;
    float: left;
    width: 625px;
    .banner-img {
    	width: 625px;
    	height: 270px;
    	border-radius: 6px;
        cursor: pointer;
    }
    .el-carousel__button{
    	background-color: #333;
    }
    .el-carousel{
    	margin-bottom: 35px;
    }
    .el-carousel__indicator.is-active button{
    	background: #fff;
    }
    .el-carousel__arrow--right{
        right: 0px;
    }
    .el-carousel__arrow--left{
        left: 0px;
    }
    .el-carousel__arrow{
        width: 40px;
        height: 50px;
        border-radius: 5px;
        background-color: rgba(0,0,0,.4);
    }
    .el-carousel__arrow:hover{
        background-color: rgba(0,0,0,.4);
    }
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
	padding-top: 26px;
`;

export const RightBoard= styled.img`
	width: 280px;
	height: 50px;
	margin-bottom: 4px;
	border-radius: 4px;
    cursor: pointer;
` 

export const TopicWapper = styled.div`
	overflow: hidden;
	width: 625px;
	height: 124px;
    border-bottom: 1px solid #f0f0f0;

`;

export const TopicItem = styled.div`
	float: left;
    margin: 0 23px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    padding-right: 10px;
    cursor: pointer;
    line-height: 32px;
    font-size:14.5px;
    color: #000
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const TopicMovehot = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 0px;
	margin-bottom: 18px;
	padding-right: 10px;
	font-size: 14px;
    color: #787878;
    cursor: pointer;
`;

export const Navicon = styled.i`
    margin-right: 5px;
    float: left;
    font-size: 20px;
     &.iconlink{
        display: inline-block;
        line-height: 32px;
        transition: .5s ease;
        font-size: 14px;
        margin-left: -10px;
    }

    &.iconlinks{
        display: inline-block;
        transition: .5s ease;
        font-size: 14px;
        float: right;
        position: relative;
        right: 5px;
        top: 3px;
    }
    &.iconfollow{
         display: inline-block;
        font-size: 13px;
        line-height: 22px;
        margin-right: 0px;
    }
    &.iconlistlike, &.iconlist_money, &.iconlist_like {
    	display: inline-block;
    	font-size: 12px;
    }
    &.iconbacktop{
        font-size: 20px;
        padding-top: 10px;
        padding-left: 15px;
    }
    &.iconlink:before{content:"\\E616"}
    &.iconlinks:before{content:"\\E616"}
    &.iconlistlike:before{content:"\\E660"}
    &.iconlist_like:before{content:"\\E661"}
    &.iconlist_money:before{content:"\\E60F"}
    &.iconfollow:before{content:"\\E611"}
    &.iconbacktop:before{content:"\\E684"}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	margin-top: 20px;
	border-bottom: 1px solid #f0f0f0;
	.pic{
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		margin: -7px 0 4px;
		border-radius: 10px;
	}

`;

export const LoadMore = styled.div`
    width: 625px;
    border-radius: 20px;
    background-color: #a5a5a5;
    margin: 30px auto 60px;
    padding: 10px 0px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: block;
    cursor: pointer;
`;

export const BackTop = styled.a`
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: block;
    position: fixed;
    text-align: center;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    transition: .1s ease-in;
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title{
		line-height: 27px;
		font-size: 18px;
		font-weight: 700;
		color: #333;
		cursor: pointer;
	}
	.desc{
		margin: 0 0 8px;
	    font-size: 13px;
	    line-height: 24px;
	    color: #999;
	}
	.meta{
		padding-right: 0!important;
	    font-size: 12px;
	    font-weight: 400;
	}

	.meta div{
		margin-right: 10px;
    	color: #b4b4b4;
    	cursor: pointer;
    	float: left;
	}
	.title:hover{
		text-decoration:underline;
		transition: all 0.1s ease-in;
	}
	.nickname:hover{
		color: black;
		transition: all 0.1s ease-in;
	}
	
`;

export const RecommendWarpper = styled.div`
    width: 280px;
    height: 82px;
    margin-bottom: 30px;
    margin-top: 4px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #fff;
    .desc{
        width: 60px;
        height: 60px;
        opacity: .85;
        margin-top: 12px;
        margin-left: 20px;
        float: left;
    }
`;

export const RecommendItem = styled.div`
    width: 143px;
    height: 43px;
    float: left;
    position: relative;
    top: 17px;
    left: 11px;
    .title{
        font-size: 15px;
        color: #333;
        cursor: pointer;
        
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendAuthors = styled.div`
    width: 280px;
    height: 330px;
    .title{
        font-size: 14px;
        color: #969696;
        width: 280px;
        height: 14px;
    }
    .title span{
        float: left;
    }
    .title a{
        display: inline-block;
        float: right;
        cursor: pointer;
    }
    .iconChangeAAA{
        display: inline-block;
        line-height: 1.3;
        transition: .5s ease;
        font-size: 13px;
        margin-right: 5px;
        float: left;
    }
    .iconChangeAAA {
        margin-top: 3.5px;
    }
    .iconChangeAAA:before{content:"\\E6E6"}
    .spin{
        display: block;
        float: left;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
    .list{
        width: 280px;
        height: 295px;
        list-style: none;
        background: #fff;
    }
    .list li{
        margin-top: 15px;
        line-height: 20px;
        height: 47px;
        width: 280px;

     }
     .name{
        float: left;
        padding-top: 5px;
     }
     .list li img{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border: 1px solid #ddd;
        border-radius: 50%;
     }
     .list li span{
        font-size: 14px;
        color: #333;
     }
     .list li p{
        font-size: 12px;
        color: #969696;
     }
     .follow{
        float: right;
        margin-top: 5px;
        font-size: 13px; 
        color: #42c02e;
     }
`