import { createComputed, With } from "ags"
import { Gtk } from "ags/gtk4"
import Mpris from "gi://AstalMpris"

export const Media = () => {
    const mpris = Mpris.get_default()

    const player = createComputed(() => {
        const players = mpris.get_players()
        return players.length > 0 ? players[0] : null
    })

    return (
        <box class="media-wrapper">
            <With value={player}>
                {(p) => {
                    if (!p) {
                        return <label label="No player" />
                    }
                    return (
                        <box orientation={Gtk.Orientation.HORIZONTAL} class="media-content">
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
                                <label label={p.playback_status === Mpris.PlaybackStatus.PLAYING ? "⏸" : "▶"} />
                            </button>
                        </box>
                    )
                }}
            </With>
        </box>
    )
}