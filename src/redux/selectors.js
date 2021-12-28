import { createSelector } from 'reselect';

const selectedCharacter = (state) => state.selectedId;
const charactersList = (state) => state.list;

export const getSelectedCharacter = createSelector(
  selectedCharacter,
  charactersList,
  (selectedId, charactersList) =>
    charactersList.find((ch) => ch.id === selectedId)
);

export const getCharacterList = createSelector(charactersList, (list) => list);
