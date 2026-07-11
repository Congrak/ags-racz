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