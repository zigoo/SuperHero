import React, { useEffect } from 'react';
import styled from 'styled-components';

import { FeaturedCharacter } from './areas/character/FeaturedCharacter';
import { CharactersList } from './areas/charactersList/CharactersList';
import { Favourites } from './areas/favourites/Favourites';
import { Controller } from './areas/controler/Controller';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from './redux/actions';

const App = () => {
  const { loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>something went wrong..</div>;
  }

  return (
    <Wrapper>
      <Controller />
      <FeaturedCharacter />
      <CharactersList />
      <Favourites />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 160px 1fr 240px;
  grid-template-rows: auto 1fr 1fr 1fr;
  grid-template-areas:
    '. controller .'
    '. featured favourites'
    '. featured favourites'
    '. charactersList .';
`;
