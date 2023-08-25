import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';

const mappingModals = {
  add: Add,
  remove: Remove,
  rename: Rename,
};

export default (type) => mappingModals[type];
