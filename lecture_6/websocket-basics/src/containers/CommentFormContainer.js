import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {commentPostRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({author, text}) => dispatch(commentPostRequested({author, text}))
});

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(undefined, mapDispatchToProps)(CommentForm);
