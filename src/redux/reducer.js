import { combineReducers } from 'redux';
import authReducer, { RESET_STATE } from '../services/auth';

const reducers = { auth: authReducer };

const combinedReducers = combineReducers(reducers, {});

export default function mainReducer(state, action) {
  const nextState =
    action.type === RESET_STATE
      ? combinedReducers(action.payload, action)
      : combinedReducers(state || undefined, action);

  return nextState;
}
