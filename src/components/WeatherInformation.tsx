import React from 'react';
import { useRecoilValue } from 'recoil';
import { WeatherOneCallResponse } from '../types/weather';
import { weatherSelector } from '../util/weather';
import { Stack } from './Stack';
import { Text } from './Text';

const WeatherInfoByDay: React.FC<{ weather: WeatherOneCallResponse['current'] }> = ({
  weather,
}) => {
  return (
    <Stack>
      <Text variant="subtitle" gutter>
        Today
      </Text>
      <Text>Sunrise: {new Date(weather.sunrise * 1000).toLocaleString()}</Text>
      <Text>Sunset: {new Date(weather.sunset * 1000).toLocaleString()}</Text>
      <Text>Cloud Coverage: {weather.clouds}%</Text>
      <Text>Temp: {weather.temp}</Text>
      <Text>Humidity: {weather.humidity}</Text>
      <Text>Wind Speed: {weather.wind_speed}</Text>
    </Stack>
  );
};

const WeatherInfoByWeek: React.FC<{ weather: WeatherOneCallResponse['daily'] }> = ({ weather }) => {
  return (
    <Stack>
      {weather.map((day) => (
        <Stack key={day.dt}>
          <Text variant="subtitle" gutter>
            {new Date(day.dt * 1000).toLocaleDateString()}
          </Text>
          <Text>Sunrise: {new Date(day.sunrise * 1000).toLocaleString()}</Text>
          <Text>Sunset: {new Date(day.sunset * 1000).toLocaleString()}</Text>
          <Text>Cloud Coverage: {day.clouds}%</Text>
          <Text>Temp: {day.temp.day}</Text>
          <Text>Humidity: {day.humidity}</Text>
          <Text>Wind Speed: {day.wind_speed}</Text>
        </Stack>
      ))}
    </Stack>
  );
};

export const WeatherInformation = () => {
  const weather = useRecoilValue(weatherSelector);

  if (!weather) {
    return <div>Weather data not found</div>;
  }

  return (
    <Stack>
      {/* Current */}
      <WeatherInfoByDay weather={weather.current} />
      <WeatherInfoByWeek weather={weather.daily} />
    </Stack>
  );
};
