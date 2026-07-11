import Mpris from "gi://AstalMpris"
import { setPersistentMode } from "../../state/island/actions/persistentMode"
import { islandMode } from "../../state/island/selectors"

const mpris = Mpris.get_default()

function checkPlayback() {
    const players = mpris.get_players()
    const playing = players.find(
        (p) => p.playback_status === Mpris.PlaybackStatus.PLAYING
    )

    if (playing && islandMode() === "idle") {
        console.log("Media playing, setting persistent mode to media")
        setPersistentMode("media")
    }

    if (!playing && islandMode() === "media") {
        console.log("No media playing, setting persistent mode to idle")
        setPersistentMode("idle")
    }
}

mpris.connect("player-added", (_mpris, player) => {
    player.connect("notify::playback-status", checkPlayback)
    checkPlayback()
})

mpris.connect("player-closed", () => {
    checkPlayback()
})