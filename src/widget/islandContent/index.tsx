import { With } from "ags"
import { IslandMode } from "../../globalTypes"
import { Clock } from "../../modules/clock"
import { Workspace } from "../../modules/workspace"
import { Media } from "../../modules/media"
import { Notifications } from "../../modules/notifications"
import { Menu } from "../menu"
import { islandMode } from "../../state/island/selectors"

export const IslandContent = () => {
    return (
        <With value={islandMode}>
            {(mode: IslandMode) => {
                switch (mode) {
                    case "idle":
                        return <Clock />
                    case "workspace":
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