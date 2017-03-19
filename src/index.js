import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import UserPage from './scripts/UserPage';
import UserDetailPage from './scripts/UserDetailPage';
import { Provider } from 'react-redux';
import configureStore from './scripts/configureStore';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={UserPage}/>
        <Route path='/:userId' component={UserDetailPage}/>
      </Router>
    </Provider>,
  document.getElementById('root')
);