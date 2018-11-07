<p align="center">
    <img width="200"    src="https:////cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png">
</p>

## jianshu-demo

    首页 详情页 以及 登录 注册 

#### 项目介绍

    一个仿照简书官网的react项目

#### 软件架构

    react + redux + immutable.js 构建简书页面

#### 安装教程( 以下 yarn add )

- `antd`(配置antd 样式, [官方有说明](https://ant.design/docs/react/use-with-create-react-app-cn) 
-  使用`styled-components`实现页面组件化 (类似antd那样)
- `react-transition-group`中的 `CSSTransition` (实现动画效果)
- `redux`(只存数据)  和 `react-redux`
- `redux-thunk`中间件 配合`axios`实现页面异步加载数据 减少不必要的ajax请求
- `immutable.js`来管理store中的数据
- `redux-immutable`统一数据格式

#### 使用说明

- 在使用`immutable`管理数据时 应该该数据是转换成 `immutable`对象
	在请求接口拿到数据时必须通过`toJS`转化一下(要不然数组或对象一直空的)

- 在实际项目上线时 并不像我这样把数据写在本地进行存储 而是配合后端进行商量

- 在开发的过程中尽量用最简洁的方式去编写代码 实现代码的可复用性 以便于后期更好的维护

#### 参与贡献

- [sunhaixin0516](https://gitee.com/github-29425276/jianshu-demo)

