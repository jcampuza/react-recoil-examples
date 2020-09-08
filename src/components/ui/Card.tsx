import styled, { css } from 'styled-components';

export const Card = styled.div<{ selected?: boolean }>`
  background-color: ${(props) => props.theme.background};
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 1rem;
  outline: none;
  transition: border-color 200ms ease-out;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.secondary};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.secondary};
  }

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${(props) => props.theme.secondary};
    `}
`;
