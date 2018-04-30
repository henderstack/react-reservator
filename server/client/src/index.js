import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GQL_URI
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
