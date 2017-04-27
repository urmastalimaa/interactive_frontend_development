import CommentList from '../components/CommentList';
import {connect} from 'react-redux';
import {filterComments} from '../reducers/CommentListReducer';
import {getCommentsRequested} from '../actions';
import {createSelector} from 'reselect';

// Initial try to memoize filtering function
// This doesn't work. Why?
const memoize = (fn) => {
  let previousResult = undefined;
  let previousParams = undefined;
  return (params) => {
    console.log('comp', params, previousParams);
    if (params === previousParams) {
      console.log('same!');
      return previousResult;
    } else {
      previousParams = params;
      previousResult = fn(params);
      return previousResult;
    }
  };
};
const filter = memoize(filterComments); // eslint-disable-line no-unused-vars

// Create memoized filter by using `createSelector` from reselect
const filteredCommentsSelector = createSelector(
  (state) => state.comments.comments,
  (state) => state.filter,
  (comments, filterText) => filterComments({comments, filterText})
);

const mapStateToProps = (state) => ({
  comments: filteredCommentsSelector(state),
  fetchState: state.comments.fetchState
});

const mapDispatchToProps = (dispatch) => ({
  onRequestComments: () => dispatch(getCommentsRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
