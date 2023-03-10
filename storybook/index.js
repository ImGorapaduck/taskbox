
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  // require('./stories');
  require('../components/Task.stories.js');
  require('../components/TaskList.stories.js');

}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;

