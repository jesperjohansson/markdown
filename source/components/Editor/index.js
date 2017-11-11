import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { update } from '../../actions/Editor';

const Container = styled.div`
  width: ${props => props.hasResized ? 'auto' : '50%'};
  height: 100%;
  max-height: 100vh;
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
  resize: horizontal;
`;

class Editor extends React.Component {
  state = {
    hasResized: false,
  }

  componentDidMount() {
    this.events(true);
  }

  isMouseDown = false
  textareaWidth = undefined

  events(bind = true) {
    if (bind) {
      this.textarea.addEventListener('mousedown', this.handleMouseDown);
      this.textarea.addEventListener('mouseup', this.handleMouseUp);
      this.textarea.addEventListener('mousemove', this.handleMouseMove);
    } else {
      this.textarea.removeEventListener('mousedown', this.handleMouseDown);
      this.textarea.removeEventListener('mouseup', this.handleMouseUp);
      this.textarea.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  handleMouseDown = () => {
    this.isMouseDown = true;
    this.textareaWidth = this.textarea.offsetWidth;
  }

  handleMouseUp = () => {
    this.isMouseDown = false;
  }

  handleMouseMove = () => {
    if (!this.isMouseDown || this.textarea.offsetWidth === this.textareaWidth) return;
    this.setState({ hasResized: true }, this.events(false));
  }

  handleChange = ({ target }) => {
    this.props.update(target.value);
  }

  render() {
    return (
      <Container hasResized={this.state.hasResized}>
        <TextArea
          innerRef={(ref) => { this.textarea = ref; }}
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
