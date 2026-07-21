import { DEFAULT_WEATHER_INFO, WEATHER_CODE_MAP } from "../../constans";
import { WeatherInfo } from "../../globalTypes";

export const getWeatherInfo = (code: number): WeatherInfo =>
    WEATHER_CODE_MAP[code] ?? DEFAULT_WEATHER_INFO
