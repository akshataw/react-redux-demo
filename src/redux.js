import { combineReducers, createStore } from 'redux';

// actions.js
export const activateUser = user => ({
  type: 'ACTIVATE_USER',
  user,
});

export const closeUser = () => ({
  type: 'CLOSE_USER',
});

// reducers.js
export const user = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_USER':
      return action.user;
    case 'CLOSE_USER':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  user
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
