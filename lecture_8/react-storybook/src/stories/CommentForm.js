import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import CommentForm from '../components/CommentForm';

// Components with internal state can also be rendered
storiesOf('CommentForm')
  .add('empty', () => (
    <CommentForm
      onSubmit={action('submit comment')}
      />
  ));
