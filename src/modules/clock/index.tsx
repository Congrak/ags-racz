import { useHover } from "../../hooks/useHover"
import { With } from "gnim"
import { IdleClock } from "./idleClock"
import { Calendar } from "./calendar"
import { getWeather } from "../../service/openMateo"

export const Clock = () => {
    const { isHovered, bind } = useHover()

    getWeather()

    return (
        <box class="clock-wrapper" $={bind}>
            <With value={isHovered}>
                {(hovered) => (hovered ? <Calendar /> : <IdleClock />)}
            </With>
        </box>
    )
}
