import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  width: 50%;
  background-color: #f4f4f4;
`;

const Previewer = props => (
  <Container>
    {props.content}
  </Container>
);

const mapStateToProps = state => ({
  content: state.Editor.content,
});

export default connect(mapStateToProps)(Previewer);
