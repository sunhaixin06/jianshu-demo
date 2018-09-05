import React, { Component }from 'react';
import { Tabs, Form, Input, Button, Checkbox, message} from 'antd'; 
import { connect } from 'react-redux';
import { services } from '../../common/header/store';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginLogo, LoginMain } from './style';

class Login extends Component{

  render(){
    const TabPane = Tabs.TabPane;
    const FormItem = Form.Item;
    const { getFieldDecorator, validateFields, validateFieldsAndScroll } = this.props.form;
    const { tabskey, Sign_In, setin  } = this.props;

    this.loginSubmit = (e) => {
      e.preventDefault();
      validateFields((err, values) => {
          if(values.name && values.password){
              message.success('登录成功',1)
              Sign_In();

          }else{
              message.error('登录信息失败',1)
          }
      });
    }

    this.signUpSubmit = (e) =>{
      e.preventDefault();
      validateFieldsAndScroll((err, values) => {
          if(values.youname && values.youpassword && values.youphone){
              message.success('注册成功',1)
          }else{
              message.error('注册信息失败',1)
          }
      });
    }

      if(!setin){
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
                <Tabs defaultActiveKey={tabskey}>
                  <TabPane tab="登录" key="sign_in">
                      <div className="js-sign-in-container">
                          <Form onSubmit={this.loginSubmit}>
                               <FormItem>
                                {getFieldDecorator('name', {
                                  rules: [{ 
                                    required: true, 
                                    message: '!',
                                    whitespace: true }],
                                })(
                                  <Input 
                                  className="session"
                                  prefix={<div className="user iconfont" />}
                                  onFocus={(e) => e.target.autocomplete="off"}
                                  placeholder="手机号或邮箱" />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('password', {
                                  rules: [{ 
                                    required: true, 
                                    message: '!',
                                    whitespace: true }],
                                })(
                                  <Input 
                                  className="session"
                                  type="password"
                                  prefix={<div className="lock iconfont" />}
                                  onFocus={(e) => e.target.autocomplete="off"}
                                  placeholder="密码" />
                                )}
                              </FormItem>
                              <FormItem>
                                {getFieldDecorator('remember', {
                                  valuePropName: 'checked',
                                  initialValue: true,
                                })(
                                  <Checkbox style={{float: 'left'}}>记住我</Checkbox>
                                )}
                                <a style={{float: 'right'}}>登录遇到问题?</a>
                              </FormItem>
                              <FormItem>
                                  <Button type="primary" 
                                    htmlType="submit" 
                                    size="large" 
                                    style={{ background: '#3194d0', border: '1px solid #3194d0'}}
                                    className="js-sign-in-button">
                                    登录
                                  </Button>
                                </FormItem>
                          </Form>
                          <div className="more-sign">
                              <h6>社交帐号登录</h6>
                              <ul>
                                  <li><div className="weibo iconfont"/></li>
                                  <li><div className="wechat iconfont"/></li>
                                  <li><div className="qq iconfont"/></li>
                                  <li><div className="qita iconfont"/></li>
                              </ul>
                          </div>
                      </div>
                  </TabPane>
                  <TabPane tab="注册" key="sign_up">
                      <div className="js-sign-in-container">
                           <Form onSubmit={this.signUpSubmit}>
                              <FormItem>
                                {getFieldDecorator('youname', {
                                  rules: [{ 
                                    required: true, 
                                    message: '!',
                                    whitespace: true }],
                                })(
                                  <Input 
                                  className="session"
                                  prefix={<div className="user iconfont" />}
                                  onFocus={(e) => e.target.autocomplete="off"}
                                  placeholder="你的昵称" />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('youphone', {
                                  rules: [{ 
                                    required: true, 
                                    message: '!',
                                    whitespace: true }],
                                })(
                                  <Input 
                                  className="session"
                                  type="string" 
                                  maxLength={11}
                                  prefix={<div className="phone iconfont" />}
                                  onFocus={(e) => e.target.autocomplete="off"}
                                  placeholder="手机号" />
                                )}
                                </FormItem>
                                <FormItem>
                                {getFieldDecorator('youpassword', {
                                  rules: [{ 
                                    required: true, 
                                    message: '!',
                                    whitespace: true }],
                                })(
                                  <Input 
                                  className="session"
                                  type="password"
                                  prefix={<div className="lock iconfont" />}
                                  onFocus={(e) => e.target.autocomplete="off"}
                                  placeholder="设置密码" />
                                )}
                                </FormItem>
                                 <FormItem>
                                  <Button type="primary" 
                                    htmlType="submit" 
                                    size="large" 
                                    style={{ background: '#42c02e', border: '1px solid #42c02e'}}
                                    className="js-sign-in-button">
                                    注册
                                  </Button>
                                </FormItem>
                           </Form>
                           <p className="sign-up-msg">
                              点击 “注册” 即表示您同意并愿意遵守简书
                              <br/>
                              <a href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
                              和
                              <a href="http://www.jianshu.com/p/2ov8x3">隐私政策</a>
                           </p>
                            <div className="more-sign">
                              <h6>社交帐号直接注册</h6>
                              <ul>
                                  <li></li>
                                  <li><div className="wechat iconfont"/></li>
                                  <li><div className="qq iconfont"/></li>
                                  <li></li>
                              </ul>
                          </div>
                      </div>
                  </TabPane>
                </Tabs>
              </LoginMain>
            </LoginWrapper>
          )
      }else{
          return <Redirect to='/' />
      }

  }

}

const mapState = (state) => ({
    tabskey: state.getIn(['login', 'tabskey']),
    setin: state.getIn(['header','login'])
});

const mapDispatch = (dispatch) => ({
      Sign_In(){
        dispatch(services.getHeaderLogin());
      },
});

export default connect(mapState,mapDispatch)(Form.create()(Login));