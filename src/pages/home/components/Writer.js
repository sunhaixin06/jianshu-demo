import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RightBoard } from '../style';

class Writer extends PureComponent{

	render(){
		const { recommendLsit } = this.props;

		return(
			<div>
				{
					recommendLsit.map((items) => {
						return(
							<div key={items.get('id')}>
								<RightBoard src={items.get('imgUrl')}/>
							</div>
						)
					})
				}
		    </div>
		)
	}
}

const mapState = (state) =>({
	recommendLsit: state.getIn(['home', 'recommendLsit'])
})

export default connect(mapState, null)(Writer);
