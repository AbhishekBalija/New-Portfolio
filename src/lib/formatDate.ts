import type { DateField } from "@prismicio/client";


export function formatDate(dateStr: DateField): string {
    if (!dateStr) return "";
    const date = new Date(dateStr);

    // Options for formatting the date in the format we want
    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    return new Intl.DateTimeFormat("en-IN", options).format(date);
}