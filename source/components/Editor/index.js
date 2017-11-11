import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { update } from '../../actions/Editor';

const Container = styled.div`
  flex-grow: 1;
  width: 50%;
  height: 100%;
`;

const TextArea = styled.textarea`
  appearance: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  border-right: 1px solid #ccc;
  outline: none;
  resize: none;
`;

class Editor extends React.Component {
  handleChange = ({ target }) => {
    this.props.update(target.value);
  }

  render() {
    return (
      <Container>
        <TextArea
          autoFocus
          onInput={this.handleChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  content: state.Editor.content,
});

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update({ content })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
