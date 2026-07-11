import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./src/widget/Bar"
import "./src/watchers"
import { setPersistentMode } from "./src/state/island/actions/persistentMode"

app.start({
  css: style,
  requestHandler(request, res) {
    if (request[0] === "toggle-launcher") {
      setPersistentMode("launcher")
      res("ok")
      return
    }
    res("unknown command")
  },
  main() {
    app.get_monitors().forEach((monitor) => {
      Bar(monitor)
    })
  },
})
