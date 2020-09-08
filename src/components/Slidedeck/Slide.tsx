import React from 'react';
import styled from 'styled-components';

interface SlideProps {
  isVisible: boolean;
}

export const Slide: React.FC<SlideProps> = ({ children, isVisible = true }) => {
  if (isVisible) {
  }
  return <SlideEl>{children}</SlideEl>;
};

// Slides

const SlideEl = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
