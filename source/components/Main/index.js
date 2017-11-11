import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled, { injectGlobal } from 'styled-components';
import reducers from '../../reducers';
import Editor from '../Editor';
import Previewer from '../Previewer';

const store = createStore(
  reducers,
  /* eslint-disable */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

const GlobalStyles = injectGlobal`
  html,
  body,
  .app {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .app {
    display: flex;
  }
`;

const Container = styled.main`
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

const Main = () => (
  <Provider store={store}>
    <Container>
      <Editor />
      <Previewer />
    </Container>
  </Provider>
);

export default Main;
