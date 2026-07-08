import { hyprland } from "../../service/hyprland"
import { showTempMode } from "../../state/island/actions/tempMode"

hyprland!.connect("notify::focused-workspace", () => {
    showTempMode("workspace", 3000)
})