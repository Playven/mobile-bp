export const RESET_STATE = 'RESET';
export const START_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER';

export const startLoader = () => ({
  type: START_LOADER
});

export const stopLoader = () => ({
  type: STOP_LOADER
});

const initialState = {
  loading: false,
  loggedIn: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case START_LOADER:
      return { ...state, loading: true };
    case STOP_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
