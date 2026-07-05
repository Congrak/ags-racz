import { createState } from "ags"
import type { IslandMode } from "../../../globalTypes"

export const [baseMode, setBaseMode] = createState<IslandMode>("idle")
export const [tempMode, setTempMode] = createState<IslandMode | null>(null)