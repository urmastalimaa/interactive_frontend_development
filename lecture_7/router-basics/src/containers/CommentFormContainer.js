import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {commentPostRequested} from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({author, text}) => {
    dispatch(commentPostRequested({author, text}));
    // Automatically change location to /comments after submitting a comment
    ownProps.history.push('/comments');
  }
});

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(undefined, mapDispatchToProps)(CommentForm);
