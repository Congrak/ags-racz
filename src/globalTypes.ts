import Mpris from "gi://AstalMpris"

export type FormatTime = string

export type IslandMode = "idle" | "workspace" | "media" | "menu" | "notifications" | "launcher"

export type totalWorkspace = number

export interface MediaManagerProps {
    p: Mpris.Player
}

export interface DayInfo {
    readonly label: string
    readonly date: number
    readonly isToday: boolean
}

export interface WeatherInfo {
    readonly label: string
    readonly iconName: string
}

export interface CalendarWeatherProps {
    temperature: number
    weatherCode: number
}