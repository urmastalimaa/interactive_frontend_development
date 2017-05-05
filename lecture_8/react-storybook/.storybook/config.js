import {configure} from '@kadira/storybook';

// Just require all the stories.
// Could do this dynamically by requiring all the files in src/stories.
const loadStories = () => {
  require('../src/stories/Comment.js');
  require('../src/stories/CommentList.js');
  require('../src/stories/CommentForm.js');
  require('../src/stories/CommentsWithFilter.js');
};

configure(loadStories, module);
