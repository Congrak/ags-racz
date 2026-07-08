import { IslandMode } from "../../../../globalTypes"
import { setBaseMode } from "../../store"


export const setPersistentMode = (mode: IslandMode) => {
    return setBaseMode(mode)
}
