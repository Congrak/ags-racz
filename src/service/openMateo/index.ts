import { fetch } from "ags/fetch"
import { getLocation } from "../ip"
import { WEATHER_API_URL } from "../../constans"

export const getWeather = async () => {
    const { lat, lon } = await getLocation()
    try {
        const res = await fetch(`${WEATHER_API_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m,weathercode&timezone=auto`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error("Error fetching weather:", error)
        return null
    }
}