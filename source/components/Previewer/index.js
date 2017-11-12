import React from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import Formatter from './Formatter';
import Styling from './Styling';

injectGlobal`${Styling}`; // eslint-disable-line

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  background-color: #f4f4f4;
`;

const Html = styled.article`
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const inject = htmlString => ({
  __html: htmlString,
});

const Previewer = props => (
  <Container>
    <Html
      className="markdown-body"
      dangerouslySetInnerHTML={inject(Formatter.format(props.content))}
    />
  </Container>
);

const mapStateToProps = state => ({
  content: state.Editor.content,
});

export default connect(mapStateToProps)(Previewer);
