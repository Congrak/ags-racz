import { hyprland } from "../../service/hyprland"
import { showTempMode } from "../../state/island/actions/persistentMode"

hyprland!.connect("notify::focused-workspace", () => {
    showTempMode("workspace", 3000)
})