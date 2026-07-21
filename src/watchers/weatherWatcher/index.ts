import GLib from "gi://GLib"
import { getWeather } from "../../service/openMateo"
import { REFRESH_INTERVAL_MS } from "../../constans"
import { setWeatherData } from "../../state/island/actions/weatherData"

export const refreshWeather = async () => {
    try {
        const data = await getWeather()
        setWeatherData({
            temperature: data.current.temperature_2m,
            weatherCode: data.current.weathercode,
        })
    } catch (error) {
        console.log("Error fetching weather:", error)
    }
}

refreshWeather()

GLib.timeout_add(GLib.PRIORITY_DEFAULT, REFRESH_INTERVAL_MS, () => {
    refreshWeather()
    return GLib.SOURCE_CONTINUE
})