import styled from 'styled-components';

export const LoginWrapper = styled.div`
   height: 100%;	
   min-height: 750px;
   text-align: center;
   font-size: 14px;
   background-color: #f1f1f1; 
   :before {
	    content: "";
	    display: inline-block;
	    height: 85%;
	    vertical-align: middle;
	}
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
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    .title{
    	margin: 0 auto 50px;
	    padding: 10px;
	    font-weight: 400;
	    font-size: 18px;
	    color: #969696;
    }
    .normal-title .sign_in{
		padding: 10px;
    	color: #969696;
    }
    .normal-title .sign_up{
		padding: 10px;
    	color: #969696;
    }
`;