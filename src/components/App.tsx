import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { Demo1 } from '../demo/demo-1';
import { Demo2 } from '../demo/demo-2';
import { Demo3 } from '../demo/demo-3';
import { Demo4 } from '../demo/demo-4';
import { Demo5 } from '../demo/demo-5';
import { Demo6 } from '../demo/demo-6';
import { Shell } from './AppShell';
import { Stack } from './ui/Stack';
import { Text } from './ui/Text';

const slides = [Demo1, Demo2, Demo3, Demo4, Demo5, Demo6];

export const currentSlideIndex = atom({
  key: 'currentSlideIndex',
  default: 0,
});

export const App: React.FC = () => {
  const [slideIndex, setCurrentSlide] = useRecoilState(currentSlideIndex);

  const gotoPrevious = () => {
    setCurrentSlide((slide) => slide - 1);
  };

  const gotoNext = () => {
    setCurrentSlide((slide) => slide + 1);
  };

  const CurrentSlide = slides[slideIndex];

  const prevDisabled = slideIndex <= 0;
  const nextDisabled = slideIndex >= slides.length - 1;

  return (
    <Shell>
      <Stack>
        <button onClick={gotoPrevious} disabled={prevDisabled}>
          Previous
        </button>
        <button onClick={gotoNext} disabled={nextDisabled}>
          Next
        </button>
      </Stack>

      <hr />

      <Text gutter variant="subtitle"></Text>

      {CurrentSlide ? <CurrentSlide /> : <Text>No slide found</Text>}
    </Shell>
  );
};
