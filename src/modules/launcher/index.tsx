import { createState, createComputed, With } from "ags"
import { Gtk } from "ags/gtk4"
import Gio from "gi://Gio"
import { setPersistentMode } from "../../state/island/actions/persistentMode"
import { apps } from "../../utils/Apps"
import { launch } from "../../utils/launch"

export const Launcher = () => {
    const [query, setQuery] = createState("")

    const filtered = createComputed(() => {
        const q = query().toLowerCase()
        if (!q) return apps.slice(0, 5)
        return apps.filter((a) => a.name.toLowerCase().includes(q)).slice(0, 5)
    })

    return (
        <box orientation={Gtk.Orientation.VERTICAL} class="launcher-content">
            <entry
                placeholderText="Which app do you need?"
                onNotifyText={(self) => setQuery(self.text || "")}
                onMap={(self) => self.grab_focus()}
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