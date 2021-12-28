import { getFavouritesFromLocalStorage } from './helpers';
import * as actions from './actionTypes';

const initialState = {
  list: [],
  favourites: getFavouritesFromLocalStorage(),
  selectedId: null,
  loading: true,
  error: false,
  total: 0,
};

function charactersReducer(state = initialState, action) {
  if (action.type === actions.GET_CHARACTERS_SUCCESS) {
    const { list, total } = action.payload;
    const [first] = state.list;

    return {
      ...state,
      total,
      loading: false,
      list: state.list.concat(...list),
      selectedId: first ? first.id : list[0].id,
    };
  }

  if (action.type === actions.SET_FEATURED) {
    return {
      ...state,
      selectedId: action.payload.id,
    };
  }

  if (action.type === actions.TOGGLE_FAVOURITE) {
    return {
      ...state,
      favourites: state.favourites.find((fav) => fav.id === action.payload.id)
        ? state.favourites.filter((fav) => fav.id !== action.payload.id)
        : state.favourites.concat(action.payload),
    };
  }

  return state;
}

export default charactersReducer;
