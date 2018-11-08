import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import 'element-theme-default';
import { Carousel } from 'element-react';

class banners extends PureComponent{
	render(){
		return(
			<Carousel height="270px" autoplay={true}>
				{this.props.List? 
				 this.props.List.map((item) => {
	              return (
	                <Carousel.Item 
	                  key={item.get('id')}>
	                  <img 
	                  	className='banner-img' 
	                  	alt=""
	                  	src={item.get('imgUrl')}/>
	                </Carousel.Item>
	              )
	            }): "" }
		    </Carousel>
		)
	}
}
const mapState = (state) =>({
	List: state.getIn(['home', 'carouselList'])
})

export default connect(mapState, null)(banners);
