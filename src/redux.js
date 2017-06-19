import { applyMiddleware, combineReducers, createStore, } from 'redux';
import thunk from 'redux-thunk';

// actions.js
export const activateTitle = text => ({
  type: 'ACTIVATE_TITLE',
  text,
});

export const closeTitle = text => ({
  type: 'CLOSE_TITLE',
  text,
});


// reducers.js
export const text = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_TITLE':
      return action.text;
    case 'CLOSE_TITLE':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  text,
});

// store.js
export function configureStore(state = {}) {
  const store = createStore(reducers, state, applyMiddleware(thunk))
  return store;
};

export const store = configureStore();
