import React, { PureComponent }from 'react';
import { LoginWrapper, LoginLogo, LoginMain } from './style';
// import { connect } from 'react-redux';

class Login extends PureComponent{

	render(){
		return(
				<LoginWrapper>
					<LoginLogo>
						<a href="/" className="logo">
							<img 
							src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" 
							alt="" />
						</a>
					</LoginLogo>
					<LoginMain>
						<h4 className="title">
							<div className="normal-title">
								<a className="sign_in">登录</a>
								<b>·</b>
								<a className="sign_up">注册</a>
							</div>
						</h4>
					</LoginMain>
				</LoginWrapper>
		)
	}
}

export default Login;	