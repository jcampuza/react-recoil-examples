import styled from 'styled-components';

export const Grid = styled.section<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, minmax(0, 1fr));
  gap: 1rem;
`;

export const GridItem = styled.div<{ span?: number }>`
  grid-column: span ${(props) => props.span || 1};
`;
