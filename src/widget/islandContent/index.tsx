import { IslandMode } from "../../globalTypes"
import { Clock } from "../../modules/clock"
import { Media } from "../../modules/media"
import { Notifications } from "../../modules/notifications"
import { islandMode } from "../../state"
import { Menu } from "../menu"

export const IslandContent = () => {
    return islandMode((mode: IslandMode) => {
        switch (mode) {
            case "idle":
                return <Clock />
            case "desktop":
                return <Desktop />
            case "media":
                return <Media />
            case "menu":
                return <Menu />
            case "notifications":
                return <Notifications />
        }
    })
}
