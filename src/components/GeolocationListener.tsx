import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { geolocationAtom } from '../util/geolocation';

export const GeolocationObserver = () => {
  const [, setGeolocation] = useRecoilState(geolocationAtom);

  useEffect(() => {
    const onSuccess = (position: Position) => {
      setGeolocation(position);
    };

    const onFailure = () => {
      prompt('There was an issue fetching position');
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  }, [setGeolocation]);

  return <></>;
};
