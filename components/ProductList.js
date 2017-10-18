import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Product from './Product';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [{
				name: 'iPhone 7',
				price: 'Price: 650$',
				imageUrl: 'https://i.ytimg.com/vi/7Jd7P42qaFM/maxresdefault.jpg'
			}, {
				name: 'Tesla',
				price: 'Price: 950$',
				imageUrl: 'https://www.tesla.com/tesla_theme/assets/img/models/v1.0/slideshow/Red_Bay-1440.jpg?20171005'
			}, {
				name: 'Iron',
				price: 'Price: 50$',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41BW0yDhVeL._SX355_.jpg'
			}, {
				name: 'The Kite Runner',
				price: 'Price: 30$',
				imageUrl: 'https://images.gr-assets.com/books/1484565687l/77203.jpg'
			}, {
				price: 'Price: 950$',
				imageUrl: 'https://www.tesla.com/tesla_theme/assets/img/models/v1.0/slideshow/Red_Bay-1440.jpg?20171005'
			}]
		};
	}

	renderProducts() {
		return this.state.products && this.state.products.map((product) => {
			return (
				<ErrorBoundary key={product.name}>
					<Product product={product} />
				</ErrorBoundary>
			);
		});
	}

	render() {
		return (
			<div className="productList" style={{ marginTop: '40px' }}>
				{ this.renderProducts() }
			</div>
		);
	}
}