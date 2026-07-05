import { FormatTime, totalWorkspace } from "./globalTypes";

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