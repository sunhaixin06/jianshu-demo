import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWapper , TopicItem, TopicMovehot, Navicon } from '../style';

class Topic extends PureComponent{

	render(){
		const { topicList } = this.props;
		
		return (
			<TopicWapper>
				{
					topicList.map((item) =>{
						return(
							<TopicItem key={item.get('id')}>
								<img
									className='topic-pic'
									src={item.get('imgUrl')}
									alt=""
								/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
				<TopicMovehot>更多热门专题</TopicMovehot>
				<TopicMovehot>
					<Navicon className='iconlink iconfont'/>
				</TopicMovehot>
			</TopicWapper>
		)
	}
}

const mapState = (state) =>({
	topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);