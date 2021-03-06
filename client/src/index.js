import React from 'react';
import  ReactDOM  from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthProvider } from "./contexts/AuthContext";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);
