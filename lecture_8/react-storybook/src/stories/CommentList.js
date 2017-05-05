import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {BrowserRouter as Router} from 'react-router-dom';
import StoryRouter from 'storybook-router';
import CommentList from '../components/CommentList';

storiesOf('CommentList')
  .add('empty', () => (
    <CommentList
      comments={[]}
      onRequestComments={action('request comments')}
      fetchState={{inFlight: false}}
      />
  ))
  // addDecorator adds a wrapper for all following stories in this `storiesOf`
  // context
  .addDecorator((story) => (
    // `Link`s inside CommentList require router context for rendering.
    // One way is to just wrap the CommentList with the actual Router component
    <Router>{story()}</Router>
  ))
  .add('with comments', () => (
    <CommentList
      comments={[
        {author: 'foo', text: 'foo-text', id: '1', inFlight: false},
        {author: 'bar', text: 'bar-text', id: '2', inFlight: true},
      ]}
      onRequestComments={action('request comments')}
      fetchState={{inFlight: false}}
      />
  ));

// But a better option is to mock out the Router and just log the history actions.
// ...and there's a little utility 'storybook-router' that does just that.
storiesOf('CommentList')
  .addDecorator(new StoryRouter())
  .add('with comments and mock router', () => (
    // Router context is provided by the decorator
    <CommentList
      comments={[
        {author: 'foo', text: 'foo-text', id: '1', inFlight: false},
        {author: 'bar', text: 'bar-text', id: '2', inFlight: true},
      ]}
      onRequestComments={action('request comments')}
      fetchState={{inFlight: false}}
      />
  ));

// Obviously another option is to introduce the react-router dependency into
// the components at a higher level and just use callbacks in the CommentList component.
