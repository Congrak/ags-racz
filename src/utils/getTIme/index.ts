import GLib from "gi://GLib?version=2.0"
import { FORMAT_TIME } from "../../constans"

export const getTime = (): string => {
    return GLib.DateTime.new_now_local().format(FORMAT_TIME) ?? ""
}
