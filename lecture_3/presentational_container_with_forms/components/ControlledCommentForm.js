import React, {Component} from 'react';

// Example of controlled form
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  focus() {
    this.authorInput.focus();
  }

  handleInputChange(event) {
    // Update state, matching state key with input name.
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmit() {
    // Get author, text values from React state.
    this.props.onSubmit(this.state);
    // Clear React state
    this.setState({author: '', text: ''});
  }

  render() {
    // A reference to author DOM input is taken only for the `focus` method
    const props = this.props;
    return (
      <div className='comment-form'>
        <h3>Controlled form</h3>
        <input
          ref={(input) => this.authorInput = input}
          name="author"
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleInputChange}
        />
        <input
          name="text"
          type="text"
          placeholder="Say something..."
          value={this.state.text}
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
