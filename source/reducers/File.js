import { ACTIONS } from '../constants';

const defaultState = {
  name: 'Untitled File',
};

const File = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.FILE_ADD:
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};

export default {
  File,
};

export {
  File,
};
