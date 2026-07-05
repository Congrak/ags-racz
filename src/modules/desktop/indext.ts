import { createBinding, createComputed } from "ags"
import Hyprland from "gi://AstalHyprland"

const hyprland = Hyprland.get_default()

export const Desktop = () => {
    const clients = createBinding(hyprland, "clients")
    const focused = createBinding(hyprland, "focusedClient")

    const windowInfo = createComputed(() => {
        const list = clients()
        const active = focused()
        const index = list.findIndex((c) => c.address === active?.address) + 1
        return `${index}/${list.length}`
    })
}

