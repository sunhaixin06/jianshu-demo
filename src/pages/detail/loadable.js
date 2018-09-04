import React from 'react';
import { Icon } from 'antd';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Detail'),
  loading(){
  	  return <Icon type="loading" />
  }
});

export default () => <LoadableComponent/>;