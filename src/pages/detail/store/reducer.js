import * as constant from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	detaillist: [],
	commonent: "问题一：在通过官方的一系列流程安装完毕之后<br />react-native init FirstApp<br />cd FirstApp<br />项目目录下只有以下两个文件:<br />这个是什么原因呢？<br因为近期rn更新，某些东西不适配，然后暂时能找到的方法就是指定较低版本的rn。<br />解决方案:<br />react-native init FirstApp --verbose --version 0.53.0<br />运行完之后的项目目录<br />问题二：<br />在新建项目完毕之后：<br />运行：<br />react-native run-ios<br />出现：<br />查找资料后发现原来是升级后watchman不可用了，需要重装watchman。<br />解决方案:<br />brew link autoconf automake<br />brew install watchman<br />然后在运行：<br />react-native run-ios<br />成功：<br />ios模拟器<br />问题三：<br />运行：<br />react-native run-android<br />❌出现以下错误：<br />Could not get BatchedBridge, make sure your bundle is packaged correctly<br />解决方案:执行以下命令<br />react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/<br />如果报错在android/app/src/main/目录新建文件夹叫 assets ，在执行一遍上面的代码,<br />然后在启动 react-native run-android 就可以啦<br />成功(真机测试):<br />三星note8真机测试<br />问题四：<br />运行react-native run-android 出现<br />❌Could not install the app on the device, read the error above for details.<br />Make sure you have an Android emulator running or a device connected and have<br />set up your Android development environment.<br />Go to https://facebook.github.io/react-native/docs/getting-started.html<br />and check the Android tab for setup instructions.<br />"
});

const DetailList = (state, action) =>{
	return state.merge({
		detaillist: fromJS(action.detaillist)
	});
}

export default (state = defaultState, action ) =>{
	switch(action.type){
		case constant.CHANGE_DETAIL:
			return DetailList(state, action);
	default:
			return state;
	}
}