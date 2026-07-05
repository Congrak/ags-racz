import { createState } from "ags"
import type { IslandMode } from "../globalTypes"

const [islandMode, setIslandMode] = createState<IslandMode>("idle")

export { islandMode, setIslandMode }