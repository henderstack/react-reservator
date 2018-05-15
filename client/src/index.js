import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

console.log("URI:: " + process.env.REACT_APP_GQL_URI)
const gqlURI = process.env.REACT_APP_GQL_URI

const client = new ApolloClient({
    uri: gqlURI,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={ client }>
        <Router>
            <div>
                <Route exact path='/' component={ App } />
            </div>
        </Router>
    </ApolloProvider>, 
    document.getElementById('root'));
registerServiceWorker();
