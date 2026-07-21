import { Gtk } from "ags/gtk4"
import { getCurrentWeek } from "../../../utils/getCurrentWeek"
import { getWeatherInfo } from "../../../utils/getWeatherInfo"
import { getFormattedDate } from "../../../utils/getFormattedDate"
import { getFormattedTime } from "../../../utils/getFormattedTime"
import type { CalendarWeatherProps } from "../../../globalTypes"

export const CalendarWeather = ({ temperature, weatherCode }: CalendarWeatherProps) => {
    const week = getCurrentWeek()
    const weather = getWeatherInfo(weatherCode)

    return (
        <box orientation={Gtk.Orientation.VERTICAL} class="calendar-weather">
            <box orientation={Gtk.Orientation.HORIZONTAL}>
                <box orientation={Gtk.Orientation.VERTICAL} hexpand>
                    <label label={getFormattedDate()} halign={Gtk.Align.START} class="cw-date" />
                    <label label={getFormattedTime()} halign={Gtk.Align.START} class="cw-time" />
                </box>
                <box orientation={Gtk.Orientation.HORIZONTAL} valign={Gtk.Align.CENTER}>
                    <image iconName={weather.iconName} pixelSize={20} class="cw-icon" />
                    <box orientation={Gtk.Orientation.VERTICAL}>
                        <label label={`${Math.round(temperature)}°`} class="cw-temp" />
                        <label label={weather.label} class="cw-condition" />
                    </box>
                </box>
            </box>

            <box class="cw-divider" />

            <box orientation={Gtk.Orientation.HORIZONTAL} class="cw-week">
                {week.map((day) => (
                    <box orientation={Gtk.Orientation.VERTICAL} hexpand halign={Gtk.Align.CENTER}>
                        <label label={day.label} class="cw-day-label" />
                        <label
                            label={String(day.date)}
                            class={day.isToday ? "cw-day-number cw-day-today" : "cw-day-number"}
                        />
                    </box>
                ))}
            </box>
        </box>
    )
}