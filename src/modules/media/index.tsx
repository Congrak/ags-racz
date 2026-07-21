import { createComputed, With } from "ags"
import Mpris from "gi://AstalMpris"
import { IdleBars } from "./idleBars"
import { MediaManager } from "./mediaManager"
import { useHover } from "../../hooks/useHover"


export const Media = () => {
    const mpris = Mpris.get_default()
    const { isHovered, bind } = useHover()

    const player = createComputed(() => {
        const players = mpris.get_players()
        if (players.length === 0) return null

        const playing = players.find((p) => p.playback_status === Mpris.PlaybackStatus.PLAYING)
        return playing ?? players[0]
    })

    return (
        <box
            class="media-wrapper"
            $={bind}
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