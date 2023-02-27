import { GET_ERRORS } from './actions/types';

const initialState = {
  msg: {},
  status: null,
};

export default function (state = initialState, action) {
  if (action.type === GET_ERRORS) {
    return { ...state, msg: action.payload.msg, status: action.payload.status };
  }
  return state;
}
