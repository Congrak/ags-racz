import Mpris from "gi://AstalMpris"

export type FormatTime = string

export type IslandMode = "idle" | "workspace" | "media" | "menu" | "notifications" | "launcher"

export type totalWorkspace = number

export interface MediaManagerProps {
    p: Mpris.Player
}