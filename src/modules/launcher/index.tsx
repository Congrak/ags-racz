import { createState, createComputed, With } from "ags"
import { Gtk } from "ags/gtk4"
import Gio from "gi://Gio"
import { setPersistentMode } from "../../state/island/actions/persistentMode"

const apps = Gio.AppInfo.get_all()
    .filter((app) => app.should_show())
    .map((app) => ({
        name: app.get_name() ?? "",
        appInfo: app,
    }))

export const Launcher = () => {
    const [query, setQuery] = createState("")

    const filtered = createComputed(() => {
        const q = query().toLowerCase()
        if (!q) return apps.slice(0, 5)
        return apps.filter((a) => a.name.toLowerCase().includes(q)).slice(0, 5)
    })

    function launch(appInfo: Gio.AppInfo) {
        appInfo.launch([], null)
        setPersistentMode("idle")
    }

    return (
        <box orientation={Gtk.Orientation.VERTICAL} class="launcher-content">
            <entry
                placeholderText="Buscar apps..."
                text={query()}
                onNotifyText={(self) => setQuery(self.text)}
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