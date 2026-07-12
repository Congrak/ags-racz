import Mpris from "gi://AstalMpris"
import { setPersistentMode } from "../../state/island/actions/persistentMode"
import { islandMode } from "../../state/island/selectors"

export const checkPlayback = (mpris: Mpris.Mpris) => {
    const players = mpris.get_players()
    const playing = players.find(
        (p) => p.playback_status === Mpris.PlaybackStatus.PLAYING
    )

    if (playing && islandMode() === "idle") {
        console.log("Media playing, setting persistent mode to media")
        return setPersistentMode("media")
    }

    if (!playing && islandMode() === "media") {
        console.log("No media playing, setting persistent mode to idle")
        return setPersistentMode("idle")
    }
}