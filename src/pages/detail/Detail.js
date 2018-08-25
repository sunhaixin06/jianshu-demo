import React from 'react';
import { DetailWrapper, DetailAuthor, DetailTitle, DetailAvatar, DetailInfo, DetailContent  } from './style';

const Detail = ({ dispatch, location, ...rest}) =>{
		console.log(location.state)
		const { title, nickname, money, like, comment } = location.state;

		return (
			<DetailWrapper>
				<DetailTitle>{title}</DetailTitle>
				<DetailAuthor>
					<DetailAvatar ><img className="avatar" /></DetailAvatar>
					<DetailInfo>
						<span className="name">{nickname}</span>
						<div className="success">
							<i className="ic-follow" />
							<span>关注</span>
						</div>
						<div className="meta">
							<span className="publish-time">2018.07.26 13:29*</span>
							<span className="wordage">字数 61</span>
							<span className="views-count">阅读 64</span>
							<span className="comments-count">评论 {comment}</span>
							<span className="likes-count">喜欢 {like}</span>
						</div>
					</DetailInfo>
				</DetailAuthor>
				<DetailContent>

				</DetailContent>
			</DetailWrapper>
		)
}
export default Detail;