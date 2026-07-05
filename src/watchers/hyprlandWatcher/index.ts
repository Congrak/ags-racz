import { setIslandMode } from "../../state"
import { hyprland } from "../../service/hyprland"

hyprland!.connect("notify::focused-workspace", () => {
    setIslandMode("desktop")
})