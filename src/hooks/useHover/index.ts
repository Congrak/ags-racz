import { createState } from "ags"
import { Gtk } from "ags/gtk4"
import GLib from "gi://GLib"

export function useHover() {
    const [isHovered, setIsHovered] = createState(false)

    const bind = (self: Gtk.Widget) => {
        const motion = new Gtk.EventControllerMotion()
        motion.connect("enter", () => {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                setIsHovered(true)
                return GLib.SOURCE_REMOVE
            })
        })
        motion.connect("leave", () => {
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                setIsHovered(false)
                return GLib.SOURCE_REMOVE
            })
        })
        self.add_controller(motion)
    }

    return { isHovered, bind }
}