import Gio from "gi://Gio?version=2.0"
import { setPersistentMode } from "../../state/island/actions/persistentMode"

export const launch = (appInfo: Gio.AppInfo) => {
    appInfo.launch([], null)
    return setPersistentMode("idle")
}