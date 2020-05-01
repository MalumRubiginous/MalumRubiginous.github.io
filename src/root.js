import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import configureStore from './configureStore';
import App from './containers/App';
import Profit from './containers/Profit';

injectGlobal`
    ${normalize()}
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    svg {
        pointer-events: none;
    }
`;

const store = configureStore();
const history = syncHistoryWithStore(
    browserHistory,
    store
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Profit} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
