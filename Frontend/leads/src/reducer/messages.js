import { CREATE_MESSAGE } from './actions/types';

const initialState = {};

export default function (state = initialState, action) {
  if (action.type === CREATE_MESSAGE) {
    return (state = action.payload);
  }
  return state;
}
