import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useFocus } from '../../util/useFocus';
import { VisuallyHidden } from './VisuallyHidden';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isFocused, callbacks } = useFocus();

  const toggleChecked = () => {
    inputRef.current?.focus();

    return props.onChange(!props.checked);
  };

  return (
    <ToggleContainer>
      <ToggleKnob checked={props.checked} isFocused={isFocused} onClick={toggleChecked} />
      <ToggleTrack onClick={toggleChecked} />

      <VisuallyHidden>
        <label>
          Theme Toggle
          <input
            ref={inputRef}
            type="checkbox"
            checked={props.checked}
            onChange={toggleChecked}
            {...callbacks}
          />
        </label>
      </VisuallyHidden>
    </ToggleContainer>
  );
};

const TOGGLE_SIZE = 22;
const CONTAINER_HEIGHT = TOGGLE_SIZE + 2;
const CONTAINER_WIDTH = TOGGLE_SIZE * 2 + 2;

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ToggleTrack = styled.div`
  height: ${CONTAINER_HEIGHT}px;
  width: ${CONTAINER_WIDTH}px;
  background-color: ${(props) => props.theme.background};
  border-radius: 20px;
`;

const ToggleKnob = styled.div<{ checked: boolean; isFocused: boolean }>`
  height: ${TOGGLE_SIZE}px;
  width: ${TOGGLE_SIZE}px;
  position: absolute;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondary};
  transition: box-shadow ease-out 1000ms;
  box-shadow: 0 0 1px 1px ${(props) => props.theme.secondary};

  ${(props) =>
    props.isFocused &&
    css`
      box-shadow: 0 0 10px 2px ${(props) => props.theme.secondary};
    `}

  top: 1px;
  left: 1px;
  transition: left 200ms ease-out, box-shadow ease-out 200ms;

  ${(props) =>
    props.checked &&
    css`
      left: ${CONTAINER_WIDTH - TOGGLE_SIZE - 1}px;
    `}
`;
