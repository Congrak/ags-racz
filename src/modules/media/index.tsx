import { createState, createComputed, With } from "ags"
import { Gtk } from "ags/gtk4"
import GLib from "gi://GLib"
import Mpris from "gi://AstalMpris"
import { IdleBars } from "./idleBars"
import { MediaManager } from "./mediaManager"


export const Media = () => {
    const mpris = Mpris.get_default()
    const [isHovered, setIsHovered] = createState(false)

    const player = createComputed(() => {
        const players = mpris.get_players()
        if (players.length === 0) return null

        const playing = players.find((p) => p.playback_status === Mpris.PlaybackStatus.PLAYING)
        return playing ?? players[0]
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
                                    hovered ?
                                        (
                                            <MediaManager p={p} />
                                        ) : (
                                            <IdleBars />
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