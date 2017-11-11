import { ACTIONS } from '../constants';

const update = ({ content }) => ({
  type: ACTIONS.EDITOR_UPDATE,
  content,
});

export default {
  update,
};

export {
  update,
};
