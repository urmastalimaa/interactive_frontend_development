import React, {Component} from 'react';

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

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmit() {
    this.props.onSubmit(this.state);
    this.setState({author: '', text: ''});
  }

  render() {
    const props = this.props;
    return (
      <div className='comment-form'>
        <h3>Comment form</h3>
        <input
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
