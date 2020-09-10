import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/Home';
import * as serviceWorker from './serviceWorker';

// REDUX
import { createStore } from 'redux';
import reducer from './store/reducers/dashboardHandler';
import { Provider } from 'react-redux';

// Router
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/app" component={App} />
        </Switch>
        {/* {localStorage.getItem('token') ? <Route path="/app"><App /></Route> : <Route path="/"><Home /></Route>} */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
