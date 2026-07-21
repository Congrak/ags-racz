import fetch from "ags/fetch";

let cachedLocation: { lat: number; lon: number } | null = null

export const getLocation = async () => {
    if (cachedLocation) return cachedLocation
    const res = await fetch("http://ip-api.com/json/")
    const data = await res.json()
    cachedLocation = { lat: data.lat, lon: data.lon }
    return cachedLocation
}
