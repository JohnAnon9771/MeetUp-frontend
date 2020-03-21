import { produce } from 'immer';

const INITIAL_STATE = {
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      default:
    }
  });
}
