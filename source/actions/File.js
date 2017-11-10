import { ACTIONS } from '../constants';

const add = ({ name }) => ({
  type: ACTIONS.FILE_ADD,
  name,
});

export default {
  add,
};

export {
  add,
};
