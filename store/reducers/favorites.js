import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../actions/favorites';

const initialState = {
  favorites: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.details],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.id),
      };
  }
  return state;
};
