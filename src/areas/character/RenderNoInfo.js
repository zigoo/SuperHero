import React from 'react';
import styled from 'styled-components';

export const RenderNoInfo = () => {
  return (
    <Wrapper>
      <Icon className="fa fa-exclamation-triangle" />
      <Text>no info found :(</Text>
      <Text>try other character</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  font-size: 48px;
  color: orange;
`;

const Text = styled.div`
  color: #ccc;
`;
