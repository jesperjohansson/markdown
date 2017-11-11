import { ACTIONS } from '../constants';

const defaultState = {
  content: '',
};

const Editor = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.EDITOR_UPDATE:
      return {
        ...state,
        content: action.content,
      };

    default:
      return state;
  }
};

export default {
  Editor,
};

export {
  Editor,
};
