import Mpris from "gi://AstalMpris"
import { checkPlayback } from "../../utils/checkPlayback"

const mpris = Mpris.get_default()
const connectedPlayers = new Set<Mpris.Player>()

function watchPlayer(player: Mpris.Player) {
    if (connectedPlayers.has(player)) return
    connectedPlayers.add(player)
    player.connect("notify::playback-status", () => checkPlayback(mpris))
    player.connect("notify", () => checkPlayback(mpris))
}

mpris.connect("player-added", (_mpris, player) => {
    watchPlayer(player)
    checkPlayback(mpris)
})

mpris.connect("player-closed", () => {
    connectedPlayers.clear()
    mpris.get_players().forEach(watchPlayer)
    checkPlayback(mpris)
})