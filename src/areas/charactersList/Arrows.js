import React from 'react';
import styled from 'styled-components';

export const LeftArrow = ({ onClick, disabled = false }) => {
  return (
    <Arrow className="fa fa-arrow-left" onClick={onClick} disabled={disabled} />
  );
};

export const RightArrow = ({ onClick, disabled = false }) => {
  return (
    <Arrow
      className="fa fa-arrow-right"
      onClick={onClick}
      disabled={disabled}
    />
  );
};

const Arrow = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border-radius: 50%;
  border: ${(props) =>
    props.disabled ? '2px solid #ddd' : '2px solid #6eb4cb'};
  color: ${(props) => (props.disabled ? '#ddd' : 'deepskyblue')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  cursor: pointer;

  padding: 10px;
  z-index: 1000;

  &.fa-arrow-left {
    left: 0px;
  }

  &.fa-arrow-right {
    right: 0px;
  }
`;
