const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
   config = injectBabelPlugin(
   		['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
   		 config
   		);
    // configs = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config = rewireLess.withLoaderOptions({
      modifyVars: { "@primary-color": "#ea6f5a" },
      javascriptEnabled: true,
    })(config, env);
    return config;
    // return configs;
 };