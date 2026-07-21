import fetch from "ags/fetch"
import { getLocation } from "../ip"

export const getWeather = async () => {
    const { lat, lon } = await getLocation()
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m,weathercode&timezone=auto`)
    const data = await res.json()
    return data
}