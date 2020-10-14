import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/Home';
import Done from './Components/Dashboard/Done/Done';
import * as serviceWorker from './serviceWorker';

// REDUX
import { createStore } from 'redux';
import reducer from './store/reducers/dashboardHandler';
import { Provider } from 'react-redux';

// Router
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Done />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/app" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
