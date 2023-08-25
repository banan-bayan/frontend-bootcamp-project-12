import AddModal from './AddModal.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';

const mappingModals = {
  add: AddModal,
  remove: Remove,
  rename: Rename,
};

export default (type) => mappingModals[type];
