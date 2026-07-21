export const getFormattedDate = (): string =>
    new Date().toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" })