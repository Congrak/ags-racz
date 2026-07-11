import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import { IslandContent } from "./islandContent"
import { islandMode } from "../state/island/selectors"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.PARTIAL}
      anchor={TOP}
      hexpand={false}
      vexpand={false}
      application={app}
      keymode={Astal.Keymode.ON_DEMAND}

    >
      <box class="island-content" halign={Gtk.Align.CENTER} valign={Gtk.Align.START}>
        <IslandContent />
      </box>
    </window>
  )
}
