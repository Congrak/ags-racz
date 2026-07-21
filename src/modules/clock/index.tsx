import { With } from "ags"
import { useHover } from "../../hooks/useHover"
import { IdleClock } from "./idleClock"
import { CalendarWeather } from "./calendarWeather"
import { weatherData } from "../../state/island/actions/weatherData"


export const Clock = () => {
    const { isHovered, bind } = useHover()

    return (
        <box class="clock-wrapper" $={bind}>
            <With value={isHovered}>
                {(hovered) => {
                    if (!hovered) return <IdleClock />

                    const weather = weatherData()
                    if (!weather) return <IdleClock />

                    return <CalendarWeather temperature={weather.temperature} weatherCode={weather.weatherCode} />
                }}
            </With>
        </box>
    )
}