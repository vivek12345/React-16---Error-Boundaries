import React from 'react';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { render } from 'react-dom';
import Main from './components/Main';

const App = () => (
	<ThemeProvider theme={theme}>
		<Main />
	</ThemeProvider>
);

render(<App />, document.getElementById('root'));