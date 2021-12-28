import React from 'react';
import styled from 'styled-components';

export const Details = ({ labelFor, value }) => {
  if (!value) return null;

  return (
    <Wrapper>
      <Header>{value}</Header>
      <SubHeader>{labelFor}</SubHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const Header = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
const SubHeader = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
