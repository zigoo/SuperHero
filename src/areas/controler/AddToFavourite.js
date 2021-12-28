import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../redux/selectors';
import * as actions from '../../redux/actionTypes';

export const AddToFavourite = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id, name } = getSelectedCharacter(state);

  const isFavourite = state.favourites.find((fav) => fav.id === id);

  const toggleFavourites = () => {
    dispatch({
      type: actions.TOGGLE_FAVOURITE,
      payload: {
        id,
        name,
      },
    });
  };

  return (
    <FavIcon
      className="fa fa-star"
      isFavourite={isFavourite}
      onClick={toggleFavourites}
      title={isFavourite ? 'remove from favourites' : 'add to favourites'}
    />
  );
};

const FavIcon = styled.i`
  cursor: pointer;
  color: ${(props) => (props.isFavourite ? '#e7e75f' : 'rgba(0,0,0,.54)')};
`;
