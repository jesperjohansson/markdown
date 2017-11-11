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

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Mono Regular'), local('FiraMono-Regular'),
      url('static/fonts/fira-mono-v6-latin-regular.woff2') format('woff2'),
      url('static/fonts/fira-mono-v6-latin-regular.woff') format('woff');
  }

  html,
  body,
  .app {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Fira Mono', serif;
    font-size: 16px;
    line-height: 1em;
  }

  .app {
    display: flex;
  }
`;
/* eslint-enable */

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
