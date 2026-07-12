import Cava from "gi://AstalCava?version=0.1"
import { setVisualizerValues } from "../../state/island/actions/visualizerValues"

const cava = Cava.get_default()

cava?.set_bars(6)
cava?.set_active(true)

cava?.connect("notify::values", () => {
    const values = cava.get_values().slice(0, 6)
    setVisualizerValues(values)
})