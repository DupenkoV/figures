import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = {numberOfColumns: 4} , action) => {

  switch (action.type) {
    case 'choise':
      return {numberOfColumns: 1}
    default:
      return state
  }
  
}

const store = createStore(reducer);

console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);