import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';

const style = {
	width: '350px',
	marginLeft: '20px',
	marginTop: '20px',
	display: 'inline-block'
};
const Product = (props) => (
	<Card style={style}>
		<CardMedia
			aspectRatio="wide"
			image={props.product.imageUrl}
		/>
		<CardTitle
			title={props.product.name.toUpperCase()}
			subtitle="Subtitle here"
		/>
		<CardText>{props.product.price}</CardText>
	</Card>
);

export default Product;