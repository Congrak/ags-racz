import { createPoll } from "ags/time"
import { getTime } from "../../utils/getTIme"

export const Clock = () => {
    const time = createPoll(getTime(), 1000, getTime)
    return <label label={time} />
}