import React, { useState } from 'react';
import styled from 'styled-components';

export const Tabs = ({ children }) => {
  const [selected, setSelected] = useState('comics');
  const TabsLabels = [];

  const handleTabSelection = (tabId) => {
    setSelected(tabId);
  };

  const TabsContent = React.Children.map(children, (child) => {
    if (!child) return null;
    if (!React.isValidElement(child)) {
      return child;
    }

    TabsLabels.push(child.props.id);

    return React.cloneElement(child, {
      selected,
      onClick: () => handleTabSelection(child.props.id),
    });
  });

  return (
    <>
      <LabelsWrapper>
        {TabsLabels.map((title) => (
          <TabTitle
            key={title}
            selected={selected === title}
            onClick={() => handleTabSelection(title)}
          >
            {title}
          </TabTitle>
        ))}
      </LabelsWrapper>
      {TabsContent}
    </>
  );
};

export const Tab = ({ id, onClick, selected, children }) => {
  const isSelected = id === selected;

  return (
    <TabWrapper onClick={onClick}>{isSelected ? children : null}</TabWrapper>
  );
};

const TabWrapper = styled.div`
  overflow-y: auto;
  max-height: 380px;

  li {
    font-size: 12px;
    color: gray;

    :hover {
      color: rgba(0, 0, 0, 0.91);
    }
  }
`;

const TabTitle = styled.div`
  font-size: 12px;
  color: teal;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? '400' : '300')};
  border - bottom: ${(props) => (props.selected ? 'thin solid #ccc' : 'none')};
`;

const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
`;
