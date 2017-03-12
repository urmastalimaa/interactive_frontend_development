import React, {Component} from 'react';

// Example of uncontrolled form
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.authorInput.focus();
  }

  onSubmit() {
    // Get author, text values from input refs
    const author = this.authorInput.value;
    const text = this.textInput.value;

    // Clear inputs by directly manipulating DOM
    this.authorInput.value = '';
    this.textInput.value = '';

    this.props.onSubmit({author, text});
  }

  render() {
    const props = this.props;
    return (
      <div className='comment-form'>
        <h3>Uncontrolled form</h3>
        <input
          ref={(input) => this.authorInput = input}
          name="author"
          type="text"
          placeholder="Your name"
          onChange={this.handleInputChange}
        />
        <input
          ref={(input) => this.textInput = input}
          name="text"
          type="text"
          placeholder="Say something..."
          onChange={this.handleInputChange}
        />
        <button type='submit' onClick={this.onSubmit}>
          {props.text}
        </button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  text: React.PropTypes.string
};

export default CommentForm;
