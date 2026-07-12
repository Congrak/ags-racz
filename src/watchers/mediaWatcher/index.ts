import Mpris from "gi://AstalMpris"
import { checkPlayback } from "../../utils/checkPlayback"
import GLib from "gi://GLib?version=2.0"

const mpris = Mpris.get_default()
const connectedPlayers = new Set<Mpris.Player>()

function watchPlayer(player: Mpris.Player) {
    if (connectedPlayers.has(player)) return
    connectedPlayers.add(player)
    player.connect("notify::playback-status", () => checkPlayback(mpris))
}

mpris.connect("player-added", (_mpris, player) => {
    watchPlayer(player)
    checkPlayback(mpris)
})

mpris.connect("player-closed", () => {
    connectedPlayers.clear()
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, 300, () => {
        mpris.get_players().forEach(watchPlayer)
        checkPlayback(mpris)
        return GLib.SOURCE_REMOVE
    })
})