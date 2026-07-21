import { fetch } from "ags/fetch";
import { GEOLOCATION_API_URL } from "../../constans";

let cachedLocation: { lat: number; lon: number } | null = null

export const getLocation = async () => {
    if (cachedLocation) return cachedLocation

    try {
        const res = await fetch(GEOLOCATION_API_URL)
        const data = await res.json()
        cachedLocation = { lat: data.lat, lon: data.lon }
        return cachedLocation
    } catch (error) {
        print("Error to get location")
        return { lat: 51.5072, lon: -0.1275 }
    }
}
