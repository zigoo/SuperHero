import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacterList } from '../../redux/selectors';
import * as actions from '../../redux/actionTypes';

export const CharacterSearch = () => {
  const inputRef = useRef(null);
  const touched = useRef(false);
  const [inputValue, setInputValue] = useState('');
  const [inputHintVisible, setHintVisible] = useState(false);

  const state = useSelector((state) => state);
  const charactersList = getCharacterList(state);
  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
    setHintVisible(true);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);

    if (!touched.current) {
      touched.current = true;
    }
  };

  const handleInputReset = () => {
    setInputValue('');
    inputRef.current && inputRef.current.focus();
  };

  const handleSearchSelect = (character) => {
    setInputValue(character.name);
    dispatch({ type: actions.SET_FEATURED, payload: { id: character.id } });
  };

  const foundCharacters = charactersList.filter(
    (c) => c.name.toLowerCase().search(inputValue.toLowerCase()) > -1
  );

  return (
    <Wrapper>
      <InputWrapper onTransitionEnd={focusInput} className="inputWrapper">
        <CharacterInput
          ref={inputRef}
          className="characterInput"
          placeholder="search characters"
          value={inputValue}
          onChange={handleInputValue}
        />
        {inputHintVisible && touched.current && (
          <HintsList>
            {foundCharacters.map((c) => (
              <li onClick={() => handleSearchSelect(c)}>{c.name}</li>
            ))}
          </HintsList>
        )}
      </InputWrapper>
      {inputValue ? (
        <ClearIcon className="fa fa-times" onClick={handleInputReset} />
      ) : (
        <SearchIcon className="fa fa-search" />
      )}
    </Wrapper>
  );
};

const HintsList = styled.ul`
  position: absolute;
  top: 20px;
  left: 0;
  background-color: white;
  width: 100%;
  border-radius: 4px;
  background-color: white;

  > li {
    font-size: 12px;
    padding: 2px 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const InputWrapper = styled.div`
  width: 0;
  overflow: hidden;
  position: relative;
  transition: all 1.5s;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  :hover {
    .inputWrapper {
      width: 160px;
      transition: all 1.5s;
      overflow: visible;
    }
  }
`;

const CharacterInput = styled.input`
  width: inherit;
  border: none;
  outline: none;
  overflow: hidden;
  border-radius: 4px;
  border: thin solid #ccc;
`;

const Icon = styled.i`
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  color: #ddd;
  width: 16px;
  height: 16px;

  :hover {
    color: rgba(0, 0, 0, 0.74);
  }
`;

const SearchIcon = Icon;
const ClearIcon = Icon;
