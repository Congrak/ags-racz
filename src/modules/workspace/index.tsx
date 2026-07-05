import { createBinding, createComputed } from "ags"
import { TOTAL_WORKSPACES } from "../../constans"
import { hyprland } from "../../service/hyprland"

export const Workspace = () => {
    const focusedWorkspace = createBinding(hyprland, "focusedWorkspace")

    const workspaceInfo = createComputed(() => {
        const workspace = focusedWorkspace()
        return `${workspace?.id ?? 1}/${TOTAL_WORKSPACES}`
    })

    return <label label={workspaceInfo} />
}

