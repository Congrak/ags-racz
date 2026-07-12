import { createState, createComputed, With } from "ags"
import { Gtk } from "ags/gtk4"
import GLib from "gi://GLib"
import Mpris from "gi://AstalMpris"
import { visualizerValues } from "../../state/island/actions/visualizerValues"


export const Media = () => {
    const mpris = Mpris.get_default()
    const [isHovered, setIsHovered] = createState(false)

    const player = createComputed(() => {
        const players = mpris.get_players()
        return players.length > 0 ? players[0] : null
    })

    return (
        <box
            class="media-wrapper"
            $={(self) => {
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
            }}
        >
            <With value={player}>
                {(p) => {
                    if (!p) {
                        return <label label="No player" />
                    }
                    return (
                        <box class="media-content">
                            <With value={isHovered}>
                                {(hovered) =>
                                    hovered ? (
                                        <box orientation={Gtk.Orientation.HORIZONTAL} class="media-expanded">
                                            <image file={p.art_url} class="media-art" />
                                            <box orientation={Gtk.Orientation.VERTICAL}>
                                                <label
                                                    label={p.title || "Unknown"}
                                                    halign={Gtk.Align.START}
                                                    class="media-title"
                                                />
                                                <label
                                                    label={p.artist || "Unknown"}
                                                    halign={Gtk.Align.START}
                                                    class="media-artist"
                                                />
                                            </box>
                                            <button onClicked={() => p.play_pause()}>
                                                <label
                                                    label={
                                                        p.playback_status === Mpris.PlaybackStatus.PLAYING
                                                            ? "⏸"
                                                            : "▶"
                                                    }
                                                />
                                            </button>
                                        </box>
                                    ) : (
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
                            </With>
                        </box>
                    )
                }}
            </With>
        </box>
    )
}