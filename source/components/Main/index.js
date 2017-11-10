import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';

const store = createStore(reducers);

const Main = () => (
  <Provider store={store}>
    <main>
      Hello world!
    </main>
  </Provider>
);

export default Main;
