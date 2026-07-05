import { With } from "ags"
import { IslandMode } from "../../globalTypes"
import { Clock } from "../../modules/clock"
import { Workspace } from "../../modules/workspace"
import { Media } from "../../modules/media"
import { Notifications } from "../../modules/notifications"
import { islandMode } from "../../state"
import { Menu } from "../menu"

export const IslandContent = () => {
    return (
        <With value={islandMode}>
            {(mode: IslandMode) => {
                switch (mode) {
                    case "idle":
                        return <Clock />
                    case "desktop":
                        return <Workspace />
                    case "media":
                        return <Media />
                    case "menu":
                        return <Menu />
                    case "notifications":
                        return <Notifications />
                }
            }}
        </With>
    )
}