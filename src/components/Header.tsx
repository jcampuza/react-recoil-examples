import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { themeAtom } from '../state/theme';
import { Text } from './Text';
import { Toggle } from './Toggle';

export const AppHeader: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const onToggleChange = () => {
    return setTheme((value) => (value === 'light' ? 'dark' : 'light'));
  };

  return (
    <StyledHeader>
      <Text variant="title" white>
        ReactJS Dallas
      </Text>

      <Toggle onChange={onToggleChange} checked={theme === 'light'} />
    </StyledHeader>
  );
};

// Styled Components
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  flex-direction: row;
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33);
`;
