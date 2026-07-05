import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import { IslandContent } from "./islandContent"

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
      application={app}
    >
      <box class="island-content" halign={Gtk.Align.CENTER}>
        <IslandContent />
      </box>
    </window>
  )
}
