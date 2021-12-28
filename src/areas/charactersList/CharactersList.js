import React, { useState } from 'react';
import { LeftArrow, RightArrow } from './Arrows';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacterList } from '../../redux/selectors';
import * as actions from '../../redux/actionTypes';

const itemsPerPage = 16;

export const CharactersList = () => {
  const [offset, setOffset] = useState(0);

  const state = useSelector((state) => state);
  const charakterList = getCharacterList(state);
  const dispatch = useDispatch();

  const handleOffsetPrev = () => {
    setOffset((offset) => offset - itemsPerPage);
  };

  const handleOffsetNext = () => {
    setOffset((offset) => offset + itemsPerPage);
  };

  const selectCharacter = (id) => {
    dispatch({ type: actions.SET_FEATURED, payload: { id } });
  };

  const visibleList = charakterList.slice(offset, offset + 16);

  return (
    <Wrapper>
      <LeftArrow onClick={handleOffsetPrev} disabled={offset === 0} />
      <RightArrow
        onClick={handleOffsetNext}
        disabled={visibleList.length < itemsPerPage}
      />
      <List>
        {visibleList.map(({ id, thumbnail }) => (
          <Unit key={id} onClick={() => selectCharacter(id)}>
            <Image src={thumbnail.path + '.' + thumbnail.extension} />
          </Unit>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: charactersList;
  background: white;
  padding: 12px 38px;
  position: relative;
`;

const Image = styled.img`
  object-fit: fill;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 10px);
`;

const Unit = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: calc(100% / 8 - 12px);
  transition: all 0.5s;
  filter: grayscale(1);

  :not(:nth-child(8n)) {
    margin-right: 12px;
  }

  :after {
    content: '';
    display: block;
    margin-top: 75%;
  }

  :hover {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 10px 2px #9ecaed;
    transform: scale(1.1);
    transition: all 0.5s;
    z-index: 5000;
    filter: none;
  }
`;
