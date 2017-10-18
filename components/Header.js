import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

const Header = () => (
	<AppBar title='VKart App'>
		<Navigation type='horizontal'>
		</Navigation>
	</AppBar>
);


export default Header;