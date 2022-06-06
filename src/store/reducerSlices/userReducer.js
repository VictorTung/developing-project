// types
const USER_ACION_TYPES = {
  SET_CURRENT_USER: "user/SET_CURRENT_USER",
};

// reducer
const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

// select
export const selectCurrentUser = (state) => state.user.currentUser;

// action
export const setCurrentUser = (user) => {
  return { type: USER_ACION_TYPES.SET_CURRENT_USER, payload: user };
};
