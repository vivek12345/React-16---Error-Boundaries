import React from 'react';

const ProductName = (props) => (
	<div className='name'>
		{props.name.toLowerCase()}
	</div>
);

export default ProductName;
