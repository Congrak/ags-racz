import { Gtk } from "ags/gtk4"
import Mpris from "gi://AstalMpris"
import type { MediaManagerProps } from "../../../globalTypes"

export const MediaManager = ({ p }: MediaManagerProps) => {
    return (
        <box orientation={Gtk.Orientation.HORIZONTAL} class="media-expanded">
            <box class="media-art-wrapper" overflow={Gtk.Overflow.HIDDEN}>
                <image file={p.cover_art || p.art_url} pixelSize={32} />
            </box>
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