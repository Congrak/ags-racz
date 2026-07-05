import { createComputed } from "ags"
import { baseMode, tempMode } from "../store"

export const islandMode = createComputed(() => tempMode() ?? baseMode())