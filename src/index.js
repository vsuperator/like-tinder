import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import UserPage from './scripts/UserPage';
import UserDetailPage from './scripts/UserDetailPage';
import { Provider } from 'react-redux';
import configureStore from './scripts/configureStore';
import App from './scripts/App';
import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiThemebtn = getMuiTheme();
const store = configureStore();

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiThemebtn}>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={UserPage}/>
            <Route path='/:userId' component={UserDetailPage}/>
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);
