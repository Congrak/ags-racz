import { Gtk } from "ags/gtk4"
import Mpris from "gi://AstalMpris"
import type { MediaManagerProps } from "../../../globalTypes"

export const MediaManager = ({ p }: MediaManagerProps) => {
    return (
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
    )
}