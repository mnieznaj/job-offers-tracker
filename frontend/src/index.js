import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/Home';
import Done from './Components/Done/Done';
import * as serviceWorker from './serviceWorker';

// REDUX
import { createStore } from 'redux';
import rootReducer from './store/reducers/dashboardHandler';
import { Provider } from 'react-redux';
// REDUX PERSIST
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Router
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userToken']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Done />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/app" component={App} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
