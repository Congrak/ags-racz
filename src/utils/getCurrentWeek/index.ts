import { DAY_LABELS } from "../../constans"
import { DayInfo } from "../../globalTypes"

export const getCurrentWeek = (): DayInfo[] => {
    const today = new Date()
    const dayOfWeek = today.getDay()
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - dayOfWeek)

    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(startOfWeek)
        d.setDate(startOfWeek.getDate() + i)
        return {
            label: DAY_LABELS[i],
            date: d.getDate(),
            isToday: d.toDateString() === today.toDateString(),
        }
    })
}