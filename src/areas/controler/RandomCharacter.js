import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterList } from '../../redux/selectors';
import * as actions from '../../redux/actionTypes';

export const RandomCharacter = () => {
  const state = useSelector((state) => state);
  const charactersList = getCharacterList(state);
  const dispatch = useDispatch();

  const randomSelect = () => {
    const max = Math.floor(charactersList.length);
    const randomNumber = Math.floor(Math.random() * (max + 1));

    dispatch({
      type: actions.SET_FEATURED,
      payload: { id: charactersList[randomNumber].id },
    });
  };

  return (
    <RandomIcon
      className="fa fa-random"
      title="random character"
      onClick={randomSelect}
    />
  );
};

const RandomIcon = styled.i`
  position: relative;
  top: 1px;

  cursor: pointer;
  color: #ddd;
  margin-right: 4px;

  :hover {
    color: rgba(0, 0, 0, 0.74);
  }
`;
