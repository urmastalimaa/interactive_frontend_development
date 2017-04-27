import React from 'react';

import AppHeader from '../components/AppHeader';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';
import CommentContainer from './CommentContainer';
import FilterContainer from './FilterContainer';
import {
  Route
} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

const CommentsWithFilter = () => (
  <div>
    <FilterContainer text='Filter comments' />
    <CommentListContainer />
  </div>
);

const App = ({history}) => {
  // Use `ConnectedRouter` with an instance of `history` instead of `Router` from React Router.
  return (
    <ConnectedRouter history={history}>
      <div>
        <AppHeader />
        <Route path="/addComment" component={CommentFormContainer} />
        <Route path="/comments" component={CommentsWithFilter} />
        <Route path="/comments/:commentId" component={CommentContainer} />
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default App;
