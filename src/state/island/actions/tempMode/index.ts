import type { IslandMode } from "../../../../globalTypes"
import { setTempMode } from "../../store"

let currentTimeout: ReturnType<typeof setTimeout> | null = null

export const showTempMode = (mode: IslandMode, duration = 2000) => {
    if (currentTimeout) clearTimeout(currentTimeout)
    setTempMode(mode)
    currentTimeout = setTimeout(() => {
        setTempMode(null)
        currentTimeout = null
    }, duration)
}