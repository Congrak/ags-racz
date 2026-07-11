import { createState, createComputed, With } from "ags"
import { Gtk } from "ags/gtk4"
import { setPersistentMode } from "../../state/island/actions/persistentMode"
import { apps } from "../../utils/Apps"
import { launch } from "../../utils/launch"
import GLib from "gi://GLib?version=2.0"

export const Launcher = () => {
    const [query, setQuery] = createState("")

    const filtered = createComputed(() => {
        const q = query().toLowerCase()
        const base = q ? apps.filter((a) => a.name.toLowerCase().includes(q)) : apps.slice()
        return base.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5)
    })

    return (
        <box orientation={Gtk.Orientation.VERTICAL} class="launcher-content">
            <entry
                placeholderText="Which app do you need?"
                onNotifyText={(self) => setQuery(self.text || "")}
                onMap={(self) => {
                    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
                        self.grab_focus()
                        return GLib.SOURCE_REMOVE
                    })
                }}
                onActivate={() => setPersistentMode("idle")}
            />
            <With value={filtered}>
                {(list) => (
                    <box orientation={Gtk.Orientation.VERTICAL}>
                        {list.map((app) => (
                            <button onClicked={() => launch(app.appInfo)}>
                                <label label={app.name} halign={Gtk.Align.START} />
                            </button>
                        ))}
                    </box>
                )}
            </With>
        </box>
    )
}