import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Comment from '../components/Comment';

// Declare a component
storiesOf('Comment')
  // add a story, which is just a component with fixed props and state
  .add('in flight', () => (
    <Comment inFlight={true} author="foo">Comment texts</Comment>
  ))
  .add('sent', () => (
    <Comment inFlight={false} author="foo">Comment text</Comment>
  ));
