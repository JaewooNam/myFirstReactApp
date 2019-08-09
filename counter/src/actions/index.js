// Action Creators

import * as types from './ActionTypes';

// () => ({}) , it equals function() { return {}}
export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
});
