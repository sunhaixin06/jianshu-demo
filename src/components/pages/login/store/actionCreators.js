import * as constant from './ActionTypes';

export const getLoginin = (tabskey) => ({
	type: constant.Tabs_in,
	tabskey
})

export const getLoginup = (tabskey) => ({
	type: constant.Tabs_up,
	tabskey
})