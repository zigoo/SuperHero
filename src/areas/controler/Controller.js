import React from 'react';
import styled from 'styled-components';
import { AddToFavourite, CharacterSearch, RandomCharacter } from './index';

export const Controller = () => {
  return (
    <Wrapper>
      <CharacterSearch />
      <RandomCharacter />
      <AddToFavourite />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: controller;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 0;
`;
