import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';

/* With React 16 we can return an array */
const Main = () => [
	<Header key={0} />,
	<ProductList key={1} />,
	<Footer key={2} />
];

export default Main;
