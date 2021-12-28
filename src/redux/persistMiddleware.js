import * as actions from './actionTypes';

export const persistMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    if (action.type === actions.TOGGLE_FAVOURITE) {
      const { favourites } = getState();
      const isPresent = favourites.find((f) => f.id === action.payload.id);

      const persistedFavourites = isPresent
        ? favourites.filter((f) => f.id !== action.payload.id)
        : favourites.concat(action.payload);

      localStorage.setItem('favourites', JSON.stringify(persistedFavourites));

      return next(action);
    }

    next(action);
  };
