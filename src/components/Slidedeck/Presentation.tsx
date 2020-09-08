import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as Keycodes from 'keycode-js';
import { go } from '../../util/go';

export const Presentation: React.FC = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = async () => {
    if (!ref.current) {
      return;
    }

    const [, err] = await go(ref.current.requestFullscreen());

    if (err) {
      alert('There was an issue going fullscreen');
    } else {
      setIsFullscreen(true);
    }
  };

  useEffect(() => {
    const exitFullscreen = () => {
      setIsFullscreen(false);
    };

    const keylisteners = (e: KeyboardEvent) => {
      switch (e.key) {
        case Keycodes.VALUE_LEFT: {
          console.log('LEFT PRESSED');
          return;
        }
      }
    };

    if (isFullscreen) {
      document.addEventListener('fullscreenchange', exitFullscreen);
      document.addEventListener('keydown', keylisteners);
    } else {
      document.removeEventListener('keydown', keylisteners);
    }
  }, [isFullscreen]);

  return (
    <SlideContainer ref={ref} onClick={handleFullscreen}>
      {children}
    </SlideContainer>
  );
};

const SlideContainer = styled.article`
  position: relative;
  border-radius: 3px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.33);

  /* Sizes of the preview */
  height: 100px;
  width: 100px;
`;
