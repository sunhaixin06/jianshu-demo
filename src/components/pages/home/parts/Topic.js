import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWapper , TopicItem, TopicMovehot, Navicon } from '../style';

class Topic extends PureComponent{

	render(){
		return (
			<TopicWapper>
				{this.props.topicList?
				 this.props.topicList.toJS().map((Topic) =>{
					return(
						<TopicItem key={Topic.id}>
							<img
								className='topic-pic'
								src={Topic.imgUrl}
								alt=""
							/>
							{Topic.title}
						</TopicItem>
					)}): ""}
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