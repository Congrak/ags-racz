import { createState } from "ags"

export const [weatherData, setWeatherData] = createState<{
    temperature: number
    weatherCode: number
} | null>(null)