import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RightBoard } from '../style';

class Hot extends PureComponent{

	render(){
		return(
			<div>
			{this.props.HotList?
			 this.props.HotList.map((items) => {
				return(
					<div key={items.get('id')}>
						<RightBoard src={items.get('imgUrl')}/>
					</div>
				)
			}):""}
		    </div>
		)
	}
}

const mapState = (state) =>({
	HotList: state.getIn(['home', 'hotList'])
})

export default connect(mapState, null)(Hot);
