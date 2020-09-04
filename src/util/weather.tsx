import { selector } from 'recoil';
import { WeatherOneCallResponse } from '../types/weather';
import { geolocationAtom } from './geolocation';

export const weatherSelector = selector<WeatherOneCallResponse | null>({
  key: 'weather',
  async get({ get }) {
    const position = get(geolocationAtom);

    if (!position) {
      return null;
    }

    return fetch(
      `/weather/onecall?lat=${position?.coords.latitude}&lon=${position?.coords.longitude}`,
      {
        method: 'GET',
      }
    ).then((r) => r.json()) as Promise<WeatherOneCallResponse>;
  },
});
