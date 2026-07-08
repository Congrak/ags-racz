import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./src/widget/Bar"
import "./src/watchers"
import { setPersistentMode } from "./src/state/island/actions/persistentMode"

app.start({
  css: style,
  main() {
    app.get_monitors().forEach((monitor) => {
      Bar(monitor)
    })
    setTimeout(() => setPersistentMode("launcher"), 3000)
  },
})
