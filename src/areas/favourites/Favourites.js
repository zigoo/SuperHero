import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../redux/selectors';
import * as actions from '../../redux/actionTypes';

export const Favourites = () => {
  const state = useSelector((state) => state);
  const { id: selectedId } = getSelectedCharacter(state);

  const favourites = state.favourites;
  const dispatch = useDispatch();

  const selectCharacter = (id) => {
    dispatch({ type: actions.SET_FEATURED, payload: { id } });
  };

  const toggleFavourites = (character) => {
    dispatch({
      type: actions.TOGGLE_FAVOURITE,
      payload: {
        id: character.id,
        name: character.name,
      },
    });
  };

  return (
    <Wrapper>
      <Title>your favourites</Title>
      {favourites.length ? (
        <>
          <List>
            {favourites.map((fav) => (
              <LiWrapper>
                <Item
                  onClick={() => selectCharacter(fav.id)}
                  isSelected={fav.id === selectedId}
                >
                  {fav.name}
                </Item>
                <RemoveIcon
                  className="fa fa-star"
                  onClick={() => toggleFavourites(fav)}
                />
              </LiWrapper>
            ))}
          </List>
        </>
      ) : (
        <NoFavsInfo>you dont have favourites yet</NoFavsInfo>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: favourites;
  padding: 0 12px;
`;

const LiWrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul``;

const RemoveIcon = styled.i`
  color: indianred;
`;

const Item = styled.li`
  font-size: 11px;
  color: ${(props) => (props.isSelected ? 'indianred' : 'teal')};
`;

const Title = styled.div`
  font-size: 12px;
  color: #bbb;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 4px;
`;

const NoFavsInfo = styled.div`
  text-align: center;
  color: #ccc;
`;
