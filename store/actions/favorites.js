export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = ({id, title, poster}) => {
  return {
    type: ADD_TO_FAVORITES,
    details: {id: id, title: title, poster: poster},
  };
};

export const removeFromFavorites = id => {
  return {type: REMOVE_FROM_FAVORITES, id};
};
