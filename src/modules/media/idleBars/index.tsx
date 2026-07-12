import { Gtk } from "ags/gtk4"
import { visualizerValues } from "../../../state/island/actions/visualizerValues"

export const IdleBars = () => {
    return (
        <box orientation={Gtk.Orientation.HORIZONTAL} class="visualizer" valign={Gtk.Align.CENTER}>
            {visualizerValues().map((v) => (
                <box
                    class="bar"
                    heightRequest={Math.max(2, v * 12)}
                    valign={Gtk.Align.END}
                    vexpand={false}
                />
            ))}
        </box>
    )
}