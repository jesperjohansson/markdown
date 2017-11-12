import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import Formatter from './Formatter';
import Styling from './Styling';

injectGlobal`${Styling}`; // eslint-disable-line

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  background-color: #ffffff;
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

Previewer.defaultProps = {
  content: '',
};

Previewer.propTypes = {
  content: PropTypes.string,
};

const mapStateToProps = state => ({
  content: state.Editor.content,
});

export default connect(mapStateToProps)(Previewer);
