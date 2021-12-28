import React from 'react';
import styled from 'styled-components';
import { RenderNoInfo, Details, Tab, Tabs } from './index';

import { useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../redux/selectors';

export const FeaturedCharacter = () => {
  const state = useSelector((state) => state);

  const {
    name,
    description,
    comics,
    stories,
    series,
    thumbnail: { path, extension },
  } = getSelectedCharacter(state);

  const getVisibleTabs = () => {
    return [
      { id: 'comics', items: comics.items },
      { id: 'stories', items: stories.items },
      { id: 'series', items: series.items },
    ].filter((entity) => !!entity.items.length);
  };

  const visibleTabs = getVisibleTabs();

  return (
    <Featured>
      <Thumbnail src={path + '.' + extension} />
      <CharacterInfo>
        <TopPanel>
          <Details labelFor="name" value={name} />
          <Details labelFor="description" value={description} />
        </TopPanel>
        <BottomPanel>
          {visibleTabs.length ? (
            <>
              <Legend>
                check <strong>{name}</strong> in:
              </Legend>
              <Tabs>
                {visibleTabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    id={tab.id}
                    title={`${tab.id.toUpperCase()} (${tab.items.length})`}
                  >
                    <ul>
                      {tab.items.map((el) => (
                        <li key={el.id}>{el.name}</li>
                      ))}
                    </ul>
                  </Tab>
                ))}
              </Tabs>
            </>
          ) : (
            <RenderNoInfo />
          )}
        </BottomPanel>
      </CharacterInfo>
    </Featured>
  );
};

const TopPanel = styled.div`
  flex: 0 0 30%;
`;

const BottomPanel = styled.div`
  flex: 0 0 70%;
  max-height: 70%;
`;

const Featured = styled.div`
  grid-area: featured;

  display: flex;
  flex-direction: row;
`;

const Thumbnail = styled.img`
  background: white;
  flex: 0 0 50%;
  max-width: 50%;

  object-fit: contain;
  width: 100%;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 25px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 245, 245, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const Legend = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.74);
  text-decoration: underline;
`;
