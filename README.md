#### 项目名称

	jianshu-demo （首页 详情页 以及 登录 注册）

#### 项目介绍

	一个仿照简书官网的react项目

#### 软件架构

	react + redux + immutable.js 构建简书页面


#### 安装教程( 以下 yarn add )

	1. antd(配置antd 样式, 官方有说明 https://ant.design/docs/react/use-with-create-react-app-cn) 
	2. styled-components 结合 React.css 实现页面组件化 (类似antd那样)
	3. react-transition-group (实现换一批转动的动画效果)
	4. redux (只存数据)  和 react-redux 
	5. redux-thunk 中间件 配合 axios 实现页面异步加载数据 减少不必要的ajax请求
	6. immutable.js 来管理store中的数据
	7. redux-immutable 统一数据格式

#### 使用说明

	1. 在使用 immutable 管理数据时 应该该数据是转换成 immutable对象啦 在请求接口拿到数据时 必须通过toJS转化一下
	(要不然数组或对象一直空的)

	2. 在实际项目上线时 并不像我这样把数据写在本地进行存储 而是配合后端进行商量

	3. 在开发的过程中尽量用最简洁的方式去编写代码 实现代码的可复用性 以便于后期更好的维护

  

#### 参与贡献

 	sunhaixin (https://gitee.com/github-29425276/jianshu-demo) 码云地址

