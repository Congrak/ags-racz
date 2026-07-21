import { FormatTime, totalWorkspace, WeatherInfo } from "./globalTypes";

export const FORMAT_TIME: FormatTime = "%H:%M"

export enum IslandMode {
    Window = "window",
    Calendar = "calendar",
    Media = "media",
    Menu = "menu",
    Notifications = "notifications",
    Clock = "clock",
}

export const TOTAL_WORKSPACES: totalWorkspace = 5

export const BLACKLISTED_IDS = new Set([
    "qv4l2.desktop",
    "qvidcap.desktop",
    "bssh.desktop",
    "bvnc.desktop",
    "avahi-discover.desktop",
    "nvidia-settings.desktop",
]);

export const SYSTEM_ONLY_CATEGORIES = new Set([
    "System", "Settings", "Utility", "Network",
    "ConsoleOnly", "Building", "Debugger", "Profiling",
    "Filesystem", "Monitor", "Security",
    "PackageManager", "TrayIcon"
]);

export const WEATHER_API_URL: string = "https://api.open-meteo.com/v1/forecast"
export const GEOLOCATION_API_URL: string = "http://ip-api.com/json/"

export const DAY_LABELS: readonly string[] = ["D", "L", "M", "M", "J", "V", "S"]

export const WEATHER_CODE_MAP: Readonly<Record<number, WeatherInfo>> = {
    0: { label: "Clear", iconName: "weather-clear-symbolic" },
    1: { label: "Mostly clear", iconName: "weather-few-clouds-symbolic" },
    2: { label: "Partly cloudy", iconName: "weather-few-clouds-symbolic" },
    3: { label: "Cloudy", iconName: "weather-overcast-symbolic" },
    45: { label: "Fog", iconName: "weather-fog-symbolic" },
    51: { label: "Drizzle", iconName: "weather-showers-scattered-symbolic" },
    61: { label: "Rain", iconName: "weather-showers-symbolic" },
    95: { label: "Thunderstorm", iconName: "weather-storm-symbolic" },
}

export const DEFAULT_WEATHER_INFO: WeatherInfo = { label: "—", iconName: "weather-severe-alert-symbolic" }


export const REFRESH_INTERVAL_MS: number = 20 * 60 * 1000